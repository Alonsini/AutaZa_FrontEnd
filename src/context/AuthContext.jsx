import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const developerEmails = [
        "jav.calderon@Autaza.com",
        "jai.barrales@Autaza.com",
        "alo.madrid@Autaza.com"
    ];

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsed = JSON.parse(userData);

            parsed.isDev = developerEmails.includes(parsed.email);

            setUser(parsed);
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        const enhancedUser = {
            ...userData,
            isDev: developerEmails.includes(userData.email)
        };

        localStorage.setItem("user", JSON.stringify(enhancedUser));
        setUser(enhancedUser);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};