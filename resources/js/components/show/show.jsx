import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, deletePost } from '../../api/postApi';

const Show = () => {
  const params = useParams();
  const { id } = params;
  const name = localStorage.getItem("name");
  const [post, setPost] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(id);
        setPost(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deletePost(id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <h3>By {post.author}</h3>
      <p>{post.body}</p>
      <div>
        <p>Likes: {post.likes}</p>
        <p>Dislikes: {post.dislikes}</p>
      </div>
      <img src={post.image_link}/>
      <br/>
      {name === post.author ? <button onClick={handleDelete}>Delete Post</button> : <></>}
    </>
  );
};

export default Show;
