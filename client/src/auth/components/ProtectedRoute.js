import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Loading } from '../../ui';
import { AuthContext } from '../../context';
import { ROUTES } from '../../constants';

export const ProtectedRoute = (props) => {
    const { isLoading, user } = useContext(AuthContext);

    if (isLoading) {
        return <Loading />;
    }

    if (!!user) {
        return <Route {...props} />;
    }

    return <Redirect to={ROUTES.SIGN_IN} />;
};
