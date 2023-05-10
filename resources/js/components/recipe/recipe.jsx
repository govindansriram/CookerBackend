import React from 'react';
import Post from '../post/post';
import { getPosts } from '../../api/postApi';

const Recipe = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const posts = async () => {
            const response = await getPosts();
            return response.posts;
        }

        setPosts(posts);
    }, []);


  return (
    <>
      <h1>Recipe</h1>
      <Post id="1" type="F" title="Recipe 1" author="Author 1" body="Body 1" likes="1" dislikes="1" />
    </>
  );
}

export default Recipe;