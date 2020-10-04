import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context';
import * as ROUTES from '../../constants';

export const ProtectedRoute = (props) => {
    const { user } = useContext(AuthContext);

    if (!!user) {
        return <Route {...props} />;
    }

    return <Redirect to={ROUTES.SIGN_IN} />;
};
