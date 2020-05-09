// import React from 'react';

export const setAuth = (token) => {
    localStorage.setItem('accessToken', token);
}

export const isAuth = () => {
    return localStorage.getItem('accessToken') !== null;
}

export const removeAuth = () => {
    localStorage.removeItem('accessToken');
}

export const getToken = () => {
    return localStorage.getItem('accessToken');
}