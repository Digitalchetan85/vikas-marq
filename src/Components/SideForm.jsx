import React from 'react';

const SideForm = () => {
  return (
    <div id="side-contact-form" className="">
    <div className="stickyForm rounded" id="" autocomplete="off">
        <button className="btn">Enquire Now</button>
        <div id="stickForm" className="form_sticky">
            <p className="text-center text-white text-capitalize"><strong>Register here and avail <br/>the <span
                        className="text-danger">best Offers!!</span></strong> </p>
            <label for="name">
                <input type="text" name="side-name" id="side-name" placeholder="Name" required=""
                    aria-required="true" />
                <span id="side-name-info" className="text-danger"></span>
            </label>
            <label for="phone">
                <input type="text" name="side-phone" id="side-phone" placeholder="Phone" required=""
                    aria-required="true" />
                <span id="side-phone-info" className="text-danger"></span>
            </label>
            <label for="email">
                <input type="email" name="side-email" id="side-email" placeholder="Email" required=""
                    aria-required="true"/>
                <span id="side-email-info" className="text-danger"></span>
            </label>
             {/* <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" /> */}
            <div className="btn-group">
                <input type="submit" name="submit" value="Send Message" onClick="sendSideContact();" id="submit"
                    className="_animate"></input>

            </div>
            <div id="side-mail-status"></div>
        </div>
    </div>
</div>

  );
};

export default SideForm;
