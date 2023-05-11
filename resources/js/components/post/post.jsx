import React from "react";
import { Card, Button, Divider } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const StyledCard = styled(Card)`
    width: 1000px;
    margin: 20px;
`;

const Post = (props) => {
    const {_id, type, title, author, body, likes, dislikes} = props;
    const navigate = useNavigate();
    const t = type === "F" ? "recipe" : "restaurant";
  return (
    <StyledCard>
      <Meta onClick={() => navigate(`${_id}`)}
        title={title}
        description={`by ${author}`}
      />
      <Divider />
      <ReactMarkdown onClick={() => navigate(`${_id}`)}>{body}</ReactMarkdown>
      <Divider />
      <Button icon={<LikeOutlined />} shape="round">
        {likes} Likes
      </Button>
      <Button icon={<DislikeOutlined />} shape="round">
        {dislikes} Dislikes
      </Button>
    </StyledCard>
  );
}

export default Post;
