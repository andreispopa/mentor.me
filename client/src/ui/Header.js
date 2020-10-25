import React, { useContext } from 'react';
import { Layout } from 'antd';

import { auth } from '../auth';
import { AuthContext } from '../context';
import { ROUTES } from '../constants';

const { Header } = Layout;

export const TopHeader = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {user ? (
                <Header>
                    <h3>Signed in as: {user.email}</h3>
                    <button onClick={() => auth.signOut()}>Sing Out</button>
                </Header>
            ) : (
                <Header>
                    <h3>Welocme</h3>
                    <button href={ROUTES.SIGN_IN}>Sing In</button>
                </Header>
            )}
        </>
    );
};
