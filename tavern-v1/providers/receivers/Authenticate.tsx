import { AxiosRequestHeaders } from 'axios';
import { TavernTypes } from './models';

type AuthToken = TavernTypes.AuthToken;

// check if there is a token in local storage
export function checkToken(): AuthToken | null {
    const token = localStorage.getItem('token');
    if (token) {
        return JSON.parse(token);
    }
    return null;
}

// set the token in local storage
export function setToken(token: AuthToken): void {
    localStorage.setItem('token', JSON.stringify(token));
}

// remove the token from local storage
export function logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/';
}

// construct AxiosRequestHeaders with the token.authHash
export function getAuthHeaders(): AxiosRequestHeaders {
    const token = checkToken();
    if (token) {
        let headers: AxiosRequestHeaders = {} as AxiosRequestHeaders;
        headers.set('Authorization', token.auth_hash);
    }
    return {} as AxiosRequestHeaders;
}