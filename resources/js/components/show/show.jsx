import React from 'react';
import { useParams } from 'react-router-dom';


const Show = () => {
    const params = useParams();
    const { id } = params;
    const name = localStorage.getItem("name");
  return (
    <>
        <h1>Title</h1>
        <h3>By Author</h3>
        <p>Body</p>
        <div>
            <p>Likes: 12</p>
            <p>Dislikes: 2</p>
        </div>
        {
            name === "Apple" ? <button>Delete Post</button> : <></>
        }
    </>
  );
};

export default Show;
