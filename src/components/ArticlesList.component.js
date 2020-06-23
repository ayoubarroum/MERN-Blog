import React, { useState, useEffect } from "react";
import Article from "./Article.component";
import { Link } from "react-router-dom";
import axios from "axios";
function ArticlesList(props) {
  const [articles, setArticles] = useState([]);

  function passId(editId) {
    props.passId(editId);
  }
  function DeleteArticle(deleteId) {
    axios
      .delete(`http://localhost:5000/articles/delete/${deleteId}`)
      .then((res) => {
        const data = res.data;
        setArticles([...data]);
      });
  }

  function readArticle(readId) {
    props.readId(readId);
  }

  useEffect(() => {
    axios.get("http://localhost:5000/articles/").then((res) => {
      const data = res.data;
      setArticles([...data]);
    });
  }, []);

  let Articles = articles.map((article, index) => {
    return (
      <Article
        key={index}
        title={article.title}
        description={article.description}
        markdown={article.markdown}
        id={article._id}
        passId={passId}
        delete={DeleteArticle}
        read={readArticle}
      />
    );
  });

  const newArt = (
    <Link to="/create">
      <button
        className="btn btn-outline-dark"
        type="button"
        style={{ marginBottom: "20px" }}
      >
        New Article
      </button>
    </Link>
  );

  return (
    <div className="container" style={{ marginBottom: "10px" }}>
      <h1>Articles List Component</h1>

      {newArt}

      {Articles}
    </div>
  );
}

export default ArticlesList;
