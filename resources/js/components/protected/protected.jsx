import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const Protected = () => {
    const name = localStorage.getItem('name');

    return (
        name ? <Outlet/> : <Navigate to={"/login"} />
    )
}

export default Protected;