import React from "react";
import Button from "@mui/material/Button";
import { AiFillLike } from "react-icons/ai";
import "./LikeButton.css";

class LikeButton extends React.Component {
  state = {
    liked: false,
    isError: false,
  };

  onClick = () => {
    this.setState({ liked: !this.state.liked, isError: !this.state.isError });
  };

  render() {
    return (
      <div className="like">
        <Button
          variant="contained"
          color={this.state.isError ? "secondary" : "primary"}
          onClick={this.onClick}
          startIcon={<AiFillLike />}
          size="large"
        >
          {this.state.liked ? "Liked" : "Like"}
        </Button>
      </div>
    );
  }
}

export default LikeButton;
