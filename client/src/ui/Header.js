import React, { useContext } from 'react';

import { auth } from '../auth';
import { AuthContext } from '../context';

export const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3>Signed in as: {user.email}</h3>
            <button onClick={() => auth.signOut()}>Sing Out</button>
        </div>
    );
};
