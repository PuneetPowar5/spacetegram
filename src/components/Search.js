import React from "react";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="Search">
      <div className="select">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            className="select"
            disableFuture
            selected={props.date}
            value={props.date}
            inputFormat="yyyy-MM-dd"
            onChange={props.changeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Search;
