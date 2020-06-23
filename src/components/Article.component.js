import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
function Article(props) {
  
  const {
    title,
    description,
    markdown,
    id,
    passId,
    delete: DeleteArticle,
    read: readArticle,
  } = props;

  function print(editId) {
    passId(editId);
  }

  function Delete(deleteId) {
    DeleteArticle(deleteId);
  }

  function readId(readId) {
    readArticle(readId);
  }

  return (
    <div className="card" style={{ padding: "10px", marginTop: "10px", boxShadow: "3px 5px 10px " }}>
      <div>
        {" "}
        <h1>{title}</h1>
        <h3>{description}</h3>
        <ReactMarkdown source={markdown.slice(0, 100) + "..."} />
        
      </div>

      <div className="btn-group col col-sm-3" role="group">
        <button
          type="button"
          onClick={() => Delete(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        {/* </Link> */}
        <button
          type="button"
          onClick={() => print(id)}
          className="btn btn-dark"
        >
          <Link
            to={`/edit/${id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Edit
          </Link>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => readId(id)}
        >
          <Link
            to={`/article/${id}`}
            style={{ textDecoration: "none", color: "#C82333" }}
          >
            {" "}
            Read{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Article;
