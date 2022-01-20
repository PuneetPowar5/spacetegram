import React from "react";
import ReactPlayer from "react-player";
import LikeButton from "./LikeButton";

const Video = (props) => {
  return (
    <div className="Media">
      <div className="photographer">{props.image.copyright}</div>
      <div className="imageTitle">{props.image.title}</div>
      <div className="like">
        <LikeButton />
      </div>
      <div>
        <ReactPlayer url={props.image.url} controls="true" loop="true" />
      </div>
      <div>
        <p className="explanation">{props.image.explanation}</p>
      </div>
    </div>
  );
};

export default Video;
