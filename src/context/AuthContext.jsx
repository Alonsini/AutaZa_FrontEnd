import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        const enhancedUser = {
            ...userData,
            isDev: userData.email === "jav.calderon@Autaza.com",
            isDev: userData.email === "jai.barrales@Autaza.com",
            isDev: userData.email === "alo.madrid@Autaza.com"
        };

        localStorage.setItem("user", JSON.stringify(enhancedUser));
        setUser(enhancedUser);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsed = JSON.parse(userData);
            parsed.isDev = parsed.email === "jav.calderon@Autaza.com";
            parsed.isDev = parsed.email === "jai.barrales@Autaza.com";
            parsed.isDev = parsed.email === "alo.madrid@Autaza.com";
            setUser(parsed);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};