import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function CreateArticle(props) {
  const [typedArticle, setTypedArticle] = useState({
    title: "",
    description: "",
    markdown: "",
  });

  const add = props.add;
  const { title, description, markdown } = typedArticle;

  function handleTitle(e) {
    let typedTitle = e.target.value;
    setTypedArticle((prevState) => {
      return { ...prevState, title: typedTitle };
    });
  }
  function handleDescription(e) {
    let typedDescription = e.target.value;
    setTypedArticle((prevState) => {
      return { ...prevState, description: typedDescription };
    });
  }
  function handleMarkdown(e) {
    let typedMarkdown = e.target.value;
    setTypedArticle((prevState) => {
      return { ...prevState, markdown: typedMarkdown };
    });
  }
  function submit(e) {
    e.preventDefault();
   
    axios
      .post("http://localhost:5000/articles/add", typedArticle)
      .then((res) => {
        console.log(res.data);
        add(typedArticle);
      });
      
    console.log("Your Article Goes:");
    console.log("Title: " + title);
    console.log("Description: " + description);
    console.log("Markdown: " + markdown);

    setTypedArticle({
      title: "",
      description: "",
      markdown: "",
    });
  }
  return (
    <>
      <form onSubmit={submit}>
        <div className="container col col-sm-8">
          <h1>Create Article Component</h1>

          <br />
          <div className="form-group ">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title."
              onChange={handleTitle}
              value={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter description."
              onChange={handleDescription}
              value={description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="markdown">Markdown</label>

            <textarea
              className="form-control"
              id="markdown"
              placeholder="Enter body using markdown."
              onChange={handleMarkdown}
              value={markdown}
              rows="3"
            />
          </div>
          <div className="btn-group" role="group">
            <Link to="/">
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn btn-dark">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateArticle;
