import jwt_decode from 'jwt-decode';

export const authenticate = (data) => {
    return localStorage.setItem('jwt', JSON.stringify(data));
}
export const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem('jwt'));
}
export const jwtDecode = accessToken => {
    return jwt_decode(accessToken)
}