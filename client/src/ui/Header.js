import React from 'react';
import { auth } from '../auth';

export const Header = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>Sing Out</button>
        </div>
    );
};
