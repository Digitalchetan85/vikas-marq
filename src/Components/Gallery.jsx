import React from "react";
import { Container } from "react-bootstrap";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";

const Gallery = () => {
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  const data = [
    {
      id: 1,
      image: "https://picsum.photos/500/800",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 2,
      image: "https://picsum.photos/500/800",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 3,
      image: "https://picsum.photos/500/800",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 4,
      image: "https://picsum.photos/500/800",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 4,
      image: "https://picsum.photos/500/800",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
  ];
  return (
    <div>
      <Container>
        {data.map((item, index) => (
          <>
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              style={{ maxHeight: "80vh", maxWidth: "50vw" }}
              className="m-1"
              onClick={() => {
                lightBoxHandler(true, index);
              }}
            />
          </>
        ))}
        {/* //Component */}
        <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={data}
          imageWidth="60vw"
          imageHeight="70vh"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
        />
      </Container>
    </div>
  );
};

export default Gallery;
