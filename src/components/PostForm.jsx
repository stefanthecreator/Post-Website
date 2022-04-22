import { useState, useEffect } from "react";
import React from "react";
import Button from "./Button";

function PostForm({ handleAddPost }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // get the value from the input field and update the title and text
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // handle submit, prevent the default event
  // create new post object and send it to parent function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length >= 4 && text.trim().length >= 10) {
      const newPost = {
        title,
        body: text,
        userId: 1,
      };

      handleAddPost(newPost);
      setTitle("");
      setText("");
    }
  };
  // message logic wether a message should appear and what kind
  // and wether the button should be enabled
  useEffect(() => {
    if (title === "" && text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (title.trim().length >= 4 && text.trim().length >= 10) {
      setMessage(null);
      setBtnDisabled(false);
    } else if (title.trim().length < 4 && text.trim().length < 10) {
      setMessage(
        "Title must be at least 4 characters and post text must be at least 10 characters"
      );
      setBtnDisabled(true);
    } else if (
      title.trim().length < 4 &&
      (text === "" || text.trim().length >= 10)
    ) {
      setMessage("Title must be at least 4 characters");
      setBtnDisabled(true);
    } else if (
      text.trim().length < 10 &&
      (title === "" || title.trim().length >= 4)
    ) {
      setMessage("Post text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(
        "Title must be at least 4 characters and post text must be at least 10 characters"
      );
      setBtnDisabled(true);
    }
  }, [title, text]);

  return (
    <div className="container">
      <div className="post-div my-3 p-3 ">
        <h4 className="text-center">Do you want to add a new post?</h4>
        <form onSubmit={handleSubmit} className="post-form text-center p-3">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Post Title</label>
            <input
              type="text"
              className="form-control mx-auto"
              placeholder="Write a catchy title here"
              onChange={handleTitleChange}
              value={title}
              maxLength="30"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Post Text</label>
            <textarea
              className="form-control mx-auto"
              placeholder="Keep it simple, but not too simple..."
              rows="4"
              onChange={handleTextChange}
              value={text}
              maxLength="300"
            ></textarea>
          </div>
          <Button
            type="submit"
            isDisabled={btnDisabled}
            version="primary add-post-btn"
          >
            Add Post
          </Button>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </div>
  );
}

export default PostForm;
