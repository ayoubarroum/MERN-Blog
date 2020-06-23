import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function EditArticle(props) {
  let id = props.id;

  const [editArticle, setEditArticle] = useState({
    title: "",
    description: "",
    markdown: "",
  });
  const { title, description, markdown } = editArticle;

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/${id}`).then((res) => {
      let data = res.data;
      setEditArticle({ ...data });
    });
  }, []);

  function handleTitle(e) {
    let editedTitle = e.target.value;
    setEditArticle((prevState) => {
      return { ...prevState, title: editedTitle };
    });
  }
  function handleDescription(e) {
    let editedDescription = e.target.value;
    setEditArticle((prevState) => {
      return { ...prevState, description: editedDescription };
    });
  }
  function handleMarkdown(e) {
    let editedMarkdown = e.target.value;
    setEditArticle((prevState) => {
      return { ...prevState, markdown: editedMarkdown };
    });
  }
  function submit(e) {
    e.preventDefault();
    console.log("Your Edited Article Goes:");
    console.log("Title: " + title);
    console.log("Description: " + description);
    console.log("Markdown: " + markdown);
    axios
      .post(`http://localhost:5000/articles/update/${id}`, editArticle)
      .then((res) => {
        console.log(res.data);
      });
    setEditArticle({
      title: "",
      description: "",
      markdown: "",
    });
  }
  return (
    <>
      <form onSubmit={submit}>
        <div className="container col col-sm-8">
          <h1>Edit Article component</h1>

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
              Edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditArticle;
