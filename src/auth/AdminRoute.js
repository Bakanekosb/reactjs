import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../api/auth';

const AdminRoute = ({ children }) => {
    console.log("admin route")
    return (
        <Route
            render={() =>
                isAuthenticated() && isAuthenticated().user.role === 0 ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/signin" }}
                    />
                )
            }
        />
    )
}

export default AdminRoute
