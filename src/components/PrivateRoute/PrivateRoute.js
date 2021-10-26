import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (
                user.uid ? children
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}>
                    </Redirect>
            )} />
    )
};

export default PrivateRoute;