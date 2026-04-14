'use client';

import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [selectedFriend, setSelectedFriend] = useState([]);

    const userInfo = {
        selectedFriend,
        setSelectedFriend
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;