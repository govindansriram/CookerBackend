import axios from './axios';

const URL = 'http://localhost:8000'

export const getPosts = async () => {
    try {
      const response = await axios.get(`${URL}/post/1`, { withCredentials: false });
      return response.data.posts;
    } catch (error) {
      console.log(error);
      return [];
    }
};
  
export const getPost = async (id) => {
    try {
        const response = await axios.get(`${URL}/post/by/id/${id}`, { withCredentials: false });
        return response.data.posts;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${URL}/api/newPost/${id}`, { withCredentials: false });
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const createPost = async (title, author, body, type, image_link) => {
    const id = Math.floor(Math.random() * 100000000) + "cook";
    const post = {title, id, author, body, type, image_link};
    try {
        const response = await axios.post(`${URL}/api/newPost`, post, { withCredentials: false });
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}
