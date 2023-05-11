import React from 'react';
import Post from '../post/post';
import { getPosts } from '../../api/postApi';

const Recipe = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      {
        posts.map((post) => 
          <Post {...post} />
        )
      }
    </>
  );
};

export default Recipe;
