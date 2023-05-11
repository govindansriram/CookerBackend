import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

const Image = styled.img`
  width: 30%;
  height: 30%;
`;

const Home = () => {
    return (
        <>
            <Image src={Logo} alt="Logo"/>
            <h1>Cooker</h1>
            <h2>Let everyone cook.</h2>
        </>
    );
}

export default Home;
