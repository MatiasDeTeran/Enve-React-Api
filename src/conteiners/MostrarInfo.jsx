import React, { useEffect } from "react"
import { useState } from "react"

export const MostarInfo = () => {

    const [data, setData] = useState([]);

    const [comments, setComments] = useState([]);

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => { setData(json) })
    }

    const FetchComments = () => {
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
                .then(response => response.json())
                .then(json => { setComments(json) })
            console.log(comments);
        }, [])

    }



    // useEffect(() => {
    //   fetchData();
    // }, [])


    return (
        <>
            <button onClick={fetchPosts}>Posts</button>
            <div>
                {data.map((item) => (
                    <div key={item.id} className="divPosts">
                        <h1>Title: {item.title}</h1>
                        <p>Body: {item.body}</p>
                        {useEffect(() => {
                            fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
                                .then(response => response.json())
                                .then(json => { setComments(json) })
                            console.log(comments);
                        }, [data])}

                        <button onClick={() => {
                            return (
                                comments.map((element) => (
                                    <div key={element.id}>
                                        <h2>post numero: {element.id}</h2>
                                        <p>name: {element.name}</p>
                                        <p>email: {element.email}</p>
                                        <p>body: {element.body}</p>
                                    </div>
                                )))
                        }}>Comments</button>

                    </div>
                ))}
            </div>
        </>
    )
}


