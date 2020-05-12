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

export const setBaseInfo = (info) => {
    localStorage.setItem('BaseInfo', info);
}

export const removeBaseInfo = () => {
    localStorage.removeItem('BaseInfo');
}

export const getBaseInfo = () => {
    return localStorage.getItem('BaseInfo');
}