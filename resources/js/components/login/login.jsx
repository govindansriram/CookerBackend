import React, { useState } from "react";
import { Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        localStorage.setItem("name", name);
        navigate("/recipe");
    };

    return (
        <>
            <h1>What is your name?</h1>
            <Input type="text" value={name} onChange={handleChange} />
            <br />
            <br />
            <Button type="primary" onClick={handleSubmit}>Enter</Button>
        </>
    )
};

export default Login;
