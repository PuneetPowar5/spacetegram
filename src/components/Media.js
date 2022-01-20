import React, { useState } from "react";
import "./Media.css";
import LikeButton from "./LikeButton";

const Media = (props) => {
  return (
    <div className="Media">
      <div className="Container">
        <div className="photographer">{props.image.copyright}</div>
        <div className="imageTitle">{props.image.title}</div>
        <div>
          <LikeButton />
        </div>
        <div>
          <img
            src={props.image.url}
            alt="image is not available"
            className="image"
          ></img>
        </div>
        <div>
          <p className="explanation">{props.image.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
