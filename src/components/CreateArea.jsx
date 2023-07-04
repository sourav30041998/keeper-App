import React, { useState } from "react";

function CreateArea(props) {
  const [note, setContent] = useState({
    title: "", // input field name and object name have to be same
    content: "" // textarea field name and object name have to be same
  });
  function handleOnChange(event) {
    let { name, value } = event.target;
    setContent((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
    // setContent((preValue) => {
    //   if (name === "title") {
    //     return {
    //       title: value,
    //       content: preValue.content
    //     };
    //   } else if (name === "content") {
    //     return {
    //       title: preValue.title,
    //       content: value
    //     };
    //   }
    // });
  }
  function handleOnInputClick(event) {
    // setIsClick(true);
    // if (isClick) {
    //   props.onClick(content);
    //   setIsClick(false);
    // }
    const title = note.title === "";
    if (title) {
      note.title = "No Title";
      props.onClick(note);
    } else{
      props.onClick(note);
    }
    // console.log(isClick);
    setContent({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleOnChange}
        />
        <button onClick={handleOnInputClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
