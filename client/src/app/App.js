import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../context';
import { SignInPage, CreateAccountPage, ProtectedRoute } from '../auth';
import { MeetingsPage } from '../meetings';
import { ErrorPage } from '../404';
import * as ROUTES from '../constants';

import 'antd/dist/antd.css';

export function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path={ROUTES.SIGN_IN}>
                        <SignInPage />
                    </Route>
                    <Route exact path={ROUTES.CREATE_ACCOUNT}>
                        <CreateAccountPage />
                    </Route>
                    <ProtectedRoute exact path={ROUTES.HOME}>
                        <MeetingsPage />
                    </ProtectedRoute>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}
