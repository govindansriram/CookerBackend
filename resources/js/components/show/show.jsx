import React from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../api/postApi';


const Show = () => {
  const params = useParams();
  const { id } = params;
  const name = localStorage.getItem("name");
  const [post, setPost] = React.useState(null);

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
      {name === post.author ? <button>Delete Post</button> : <></>}
    </>
  );
};

export default Show;
