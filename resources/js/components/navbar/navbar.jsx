import React from "react";
import styled, {css} from "styled-components";
import {useNavigate, Link} from "react-router-dom";
import {Button} from "antd";
import Logo from "../../assets/logo.png";

const Header = styled.div`
  z-index: 10;
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LeftOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;

const RightOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const cursor = css`
  cursor: pointer;
  color: black;
`;

const LinkStyledLarge = styled(Link)`
  padding: 0px 10px;
  text-decoration: none;
  font-size: 16px;
  ${cursor}
  
  :hover {
    color: white;
  }
`;

const ButtonStyledDefault = styled(Button)`
  margin: 0px 5px;
  color: white;
  &&& {
    color: #fff;
    text-decoration: none;
    
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;


const Navigation = () => {
    const navigate = useNavigate();

    return (
        <Header>
            <LeftOptions>
                <LinkStyledLarge to={"/"}>
                    <Image src={Logo} alt="Logo"/>
                </LinkStyledLarge>
            </LeftOptions>
            <RightOptions>
                <ButtonStyledDefault type="text" size="large" onClick={() => navigate("recipe")}>
                    Recipes
                </ButtonStyledDefault>
                <ButtonStyledDefault type="text" size="large" onClick={() => navigate("restaurant")}>
                    Restaurant
                </ButtonStyledDefault>
            </RightOptions>
        </Header>
    );
}

export default Navigation;
