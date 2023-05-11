import React from "react";
import { Card, Button, Divider } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { likePost } from '../../api/postApi';

const { Meta } = Card;

const StyledCard = styled(Card)`
    width: 1000px;
    margin: 20px;
`;

const Post = (props) => {
    const {_id, type, title, author, body, likes, dislikes} = props;
    const navigate = useNavigate();
    const t = type === "F" ? "recipe" : "restaurant";

    const handleLike = async (is_like) => {
        try {
            await likePost(_id, is_like);
        } catch (error) {
            console.log(error);
        }
      };

  return (
    <StyledCard>
      <Meta onClick={() => navigate(`${_id}`)}
        title={title}
        description={`by ${author}`}
      />
      <Divider />
      <ReactMarkdown onClick={() => navigate(`${_id}`)}>{body}</ReactMarkdown>
      <Divider />
      <Button icon={<LikeOutlined />} shape="round" onClick={() => handleLike(true)}>
        {likes} Likes
      </Button>
      <Button icon={<DislikeOutlined />} shape="round" onClick={() => handleLike(false)}>
        {dislikes} Dislikes
      </Button>
    </StyledCard>
  );
}

export default Post;
