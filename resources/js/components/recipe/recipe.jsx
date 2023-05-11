import React from 'react';
import Post from '../post/post';
import { Form, Input, Button } from "antd";
import { getPosts, createPost } from '../../api/postApi';
import styled from "styled-components";

const { TextArea } = Input;

const StyledCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
`;

const Recipe = () => {
  const [posts, setPosts] = React.useState([]);
  const [form] = Form.useForm();
  const name = localStorage.getItem("name");

  const [searchPosts, setSearchPosts] = React.useState("");

  const searchPostsArray = posts.filter((post) => {
      return post.author.toLowerCase().includes(searchPosts.toLowerCase());
  });

  const onFinish = async (values) => {
    try {
      const response = await createPost(
        values.title,
        name,
        values.body,
        'F',
        values.image_link
      );
      console.log(response);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

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
      <h2>Post your Recipe</h2>
      <StyledCard>
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Body" name="body" rules={[{ required: true }]}>
          <TextArea />
        </Form.Item>
        <Form.Item label="Image Link" name="image_link">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Post
          </Button>
        </Form.Item>
      </Form>
      </StyledCard>
      <Input value={searchPosts} onChange={(e) => setSearchPosts(e.target.value)} placeholder="Search by author"/>
      {
        searchPostsArray.map((post) => 
          post.type === 'F' && <Post key={post._id} {...post} />
        )
      }
    </>
  );
};

export default Recipe;
