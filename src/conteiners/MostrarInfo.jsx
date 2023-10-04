import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/conteiners.css";

export const MostarInfo = () => {
  const [data, setData] = useState([]);

  const [comments, setComments] = useState([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  const FetchComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
    console.log(comments);
  };

  // useEffect(() => {
  //   fetchData();
  // }, [])

  return (
    <>
      <button onClick={fetchPosts} className="botonPost">
        Bring posts
      </button>

      <div className="div-general">
        {data.map((item) => (
          <div key={item.id} className="divPosts">
            <h2 className="titulos">Title: {item.title}</h2>
            <p className="cuerpo-post">Body: {item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
