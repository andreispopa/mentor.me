import React, { useEffect, useState } from 'react';

import { auth } from '../auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [authInfo, setAuthInfo] = useState(() => {
        const user = auth.getCurrentUser();
        const isLoading = !user;

        return { isLoading, user };
    });

    useEffect(() => {
        const unsubscribe = auth.addAuthListener(setAuthInfo);
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
