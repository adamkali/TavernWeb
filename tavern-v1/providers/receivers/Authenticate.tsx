<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
=======
import { AxiosRequestHeaders } from 'axios';
>>>>>>> Vaporwave
import { TavernTypes } from './models';

type AuthToken = TavernTypes.AuthToken;

<<<<<<< HEAD

// make a isLogged in function to check if the AuthToken is in the storage
// the token's key is "UserToken"
export const isLoggedIn = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from AsyncStorage as TavernProfileModels.AuthToken
        let res: AuthToken;
        const token = await AsyncStorage.getItem('UserToken');
        if (token !== null || token !== undefined) {
            res = {} as AuthToken;
            if (res.active) {
                resolve(true);
            } else {
                reject('User Not Activated');
            }
        } else reject('Not stored yet');
    });
};

// make a function that stores an AuthToken into the AsyncStorage
// the Token's key is "UserToken"
export const storeToken = async (
    token: AuthToken
): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Store the token in AsyncStorage
        AsyncStorage.setItem('UserToken', JSON.stringify(token));
        resolve();
    });
};

// make a constuct header function
// get the current AuthToken from AsyncStorage
// the Token's key is "UserToken"
// it should create a header of { 'Authorization' : 'Bearer ' + data.AuthHash }
export const constructHeader = async (): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        // Get the AuthToken from AsyncStorage
        let header: string;
        const token = await AsyncStorage.getItem('UserToken');
        if (token !== null || token !== undefined) {
            // make a new AuthToken
            const authToken = {} as AuthToken;
            header = 'Bearer ' + authToken.auth_hash;
            resolve(header);
        } else reject('Could not load AsyncStorage');
    });
};

// check if the app is being used for the first time
// the key is "FirstTime"
export const isFirstTime = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from AsyncStorage as TavernProfileModels.AuthToken
        let res: boolean;
        const token = await AsyncStorage.getItem('FirstTime');
        if (token !== null || token !== undefined) {
            res = JSON.parse(token ?? '');
            resolve(res);
        } else reject('Not stored yet');
    });
};

// set the first time to be 'Set Up'
// the key is "FirstTime"
export const setFirstTime = async (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from AsyncStorage as TavernProfileModels.AuthToken
        await AsyncStorage.setItem('FirstTime', JSON.stringify(true));
        resolve();
    });
};
=======
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
>>>>>>> Vaporwave
