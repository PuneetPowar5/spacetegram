import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="TitlePage">
      <div className="Container">
        <Link to="/" className="link">
          <div className="Name">SPACETEGRAM</div>
        </Link>
      </div>
    </div>
  );
};

export default Title;
