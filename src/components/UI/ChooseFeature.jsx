import React from "react";

const ChooseFeature = ({ image, title, description }) => {
  return (
    <div className="choose__feature">
      <figure className="choose__feature__img_wrapper">
        <img src={image} alt="" className="choose__feature__img" />
      </figure>
      <div className="choose__feature__text">
        <h2 className="choose___feature__text__title">{title}</h2>
        <p className="choose__feature__text__para">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChooseFeature;
