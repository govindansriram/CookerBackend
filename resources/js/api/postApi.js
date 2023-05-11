import axios from './axios';

export const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/post/1', { withCredentials: false });
      console.log(response.data.posts);
      return response.data.posts;
    } catch (error) {
      console.log(error);
      return [];
    }
};
  
export const getPost = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/post/by/id/${id}`, { withCredentials: false });
        return response.data.post;
    } catch (error) {
        console.log(error);
        return {};
    }
}
