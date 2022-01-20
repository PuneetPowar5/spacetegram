import React from "react";
import "./Welcomepage.css";
import Btn from "./Button";
import Title from "./Titile";

const Welcome = () => {
  var date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return (
    <div className="Welcomepage">
      <div>
        <Title />
      </div>
      <div className="Welcome">
        <h1> Welcome, Today is {today}</h1>
      </div>
      <div className="Button">
        <Btn />
      </div>
    </div>
  );
};

export default Welcome;
