import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ContactModal = (props) => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    const data = values;

    console.log(data);

    axios
      .get(
        "email.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-primary text-uppercase border-0">
            Assetz Marq
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="name" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone No
                    </label>
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <div className="">
                    <Button className="btn btn-primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
