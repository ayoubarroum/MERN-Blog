import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
function ReadArticle(props) {
  let ArticleId = props.Id;
  const [articleRead, setArticleRead] = useState({
    title: "",
    description: "",
    markdown: "",
  });

  const { title, description, markdown } = articleRead;

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/${ArticleId}`).then((res) => {
      const data = res.data;
      setArticleRead({ ...data });
      console.log(ArticleId);
      console.log(data);
    });
  }, []);

  return (
    <div className="container">
      <div
        className="btn-group col col-sm-3"
        role="group"
        style={{ margin: "10px" }}
      >
        <Link to="/">
          <button className="btn btn-outline-dark" type="button">
            Articles
          </button>
        </Link>
        <Link to="/create">
          <button className="btn btn-outline-dark" type="button">
            New Article
          </button>
        </Link>
      </div>
      <div className="container">
        <h1>{title}</h1>
        <h6>{description}</h6>

        <ReactMarkdown source={markdown} />
      </div>
    </div>
  );
}

export default ReadArticle;
