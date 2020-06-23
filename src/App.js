import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ArticlesList from "./components/ArticlesList.component.js";
import EditArticle from "./components/EditArticle.component.js";
import CreateArticle from "./components/CreateArticle.component.js";
import ReadArticle from "./components/ReadArticle.component.js";

function App() {
  const [articles, setArticles] = useState([]);

  function addArticle(articleObj) {
    setArticles((prevState) => [...prevState, articleObj]);
    console.log(articles);
  }  
  let editArticleId = "";
  function passId(editId) {
    console.log(editId);
    editArticleId = editId;
  }

  let readArticleId = "";
  function readId(Id) {
    console.log(Id);
    readArticleId = Id;
  }

  return (
    <>
      <Router>
        {" "}
        <nav
          className="navbar navbar-light bg-light"
          style={{ marginBottom: "10px" }}
        >
          <a className="navbar-brand" href="#">
            A blog
          </a>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <ArticlesList passId={passId} readId={readId} />}
          />

          <Route
            path="/create"
            component={() => <CreateArticle add={addArticle} />}
          />
          <Route
            path="/edit/:id"
            component={() => <EditArticle id={editArticleId} />}
          />
          <Route
            path="/article/:id"
            component={() => <ReadArticle Id={readArticleId} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
