import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";

const Btn = () => {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div className="Button">
      <Link to="/data" className="link">
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading..."
          variant="outlined"
          size="large"
          fullWidth={true}
          variant="contained"
          color="secondary"
        >
          See NASA's APOD
        </LoadingButton>
      </Link>
    </div>
  );
};

export default Btn;
