import React from "react";
import Media from "./Media";
import Search from "./Search";
import moment from "moment";
import Title from "./Titile";
import Video from "./Video";
//

class Data extends React.Component {
  state = {
    image: "",
    date: moment(),
  };

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=aBy3coK4567z99fDnQOpuhLl76FVYZ0CUcg6DXYB"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ image: data });
      });
  }

  getPhoto = (date) => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=aBy3coK4567z99fDnQOpuhLl76FVYZ0CUcg6DXYB&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ image: data }));
  };

  changeDate = (dateFromInput) => {
    this.setState({ date: dateFromInput });
    this.getPhoto(
      `${dateFromInput.getFullYear()}-${
        dateFromInput.getMonth() + 1
      }-${dateFromInput.getDate()}`
    );
  };

  render() {
    return (
      <div>
        <div>
          <Title />
        </div>
        <div>
          <Search changeDate={this.changeDate} date={this.state.date} />
        </div>
        <div>
          {this.state.image.media_type == "image" ? (
            <div>
              <Media image={this.state.image} />
            </div>
          ) : (
            <div>
              {" "}
              <Video image={this.state.image} />{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Data;
