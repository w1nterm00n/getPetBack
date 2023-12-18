import React from "react";

const Slide = (props) => {
  debugger;
  return (
    <>
      <div className={`carousel-item ` + props.className} >
        <img
          src={props.photo}
          className="d-block w-100 slide"
          alt="cat"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>{props.description}</h5>
          <a
            href="advert.html"
            style={{ color: "white", fontSize: 20, fontWeight: 500 }}
          >
            подробнее
          </a>
        </div>
      </div>
    </>
  );
};

export default Slide;