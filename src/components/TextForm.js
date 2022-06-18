import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text to change");

  const ToUpper = () => {
    console.log("Clicked Button");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been uppercased", "success");
  };

  const ToLower = () => {
    console.log("Clicked Button");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been lowercased", "success");

  };

  const removeSpaces = () => {
    let newText = text.replace(/\s\s+/g, " ");
    setText(newText);
    props.showAlert("Removed all spaces", "warning");

  };

  const clearAll = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Everything erased", "danger");
  };

  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#020124" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={ToUpper}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={ToLower}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary my-3" onClick={removeSpaces}>
            Remove extra spaces
          </button>
          <button className="btn btn-danger mx-3 my-3" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
