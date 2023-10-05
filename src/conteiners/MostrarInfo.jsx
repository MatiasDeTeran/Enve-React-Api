import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/conteiners.css";

export const MostarInfo = () => {
    const [data, setData] = useState([]);

    const [comments, setComments] = useState([]);

    const fetchPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {setData(json)});
    };

    const FetchComments = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + id)
            .then((response) => response.json())
            .then((json) => {setComments({...comments, [id]:json});});
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
                        <button onClick={()=>{FetchComments(item.id)}} className="boton-comments">comments</button>
                        {comments[item.id] && ( // Verificamos si hay comentarios para este post
                            <div>
                                {comments[item.id].map((element) => (
                                    <div key={element.id}>
                                        <h3>user name: {element.name}</h3>
                                        <h3>email: {element.email}</h3>
                                        <p>{element.body}</p>
                                        <p>---------------------------------------------</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        
                    </div>
                ))}
            </div>
        </>
    );
};





