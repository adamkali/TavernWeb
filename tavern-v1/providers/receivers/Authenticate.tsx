import { TavernTypes } from './models';

type AuthToken = TavernTypes.AuthToken;

// make a isLogged in function to check if the AuthToken is in the storage
// the token's key is "UserToken"
export const isLoggedIn = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from window.localStorage as TavernProfileModels.AuthToken
        let res: AuthToken;
        const token = await window.localStorage.getItem('UserToken');
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

// make a function that stores an AuthToken into the window.localStorage
// the Token's key is "UserToken"
export const storeToken = async (token: AuthToken): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Store the token in window.localStorage
        window.localStorage.setItem('UserToken', JSON.stringify(token));
        resolve();
    });
};

// make a constuct header function
// get the current AuthToken from window.localStorage
// the Token's key is "UserToken"
// it should create a header of { 'Authorization' : 'Bearer ' + data.AuthHash }
export const constructHeader = async (): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        // Get the AuthToken from window.localStorage
        let header: string;
        const token = await window.localStorage.getItem('UserToken');
        if (token !== null || token !== undefined) {
            // make a new AuthToken
            const authToken = {} as AuthToken;
            header = 'Bearer ' + authToken.auth_hash;
            resolve(header);
        } else reject('Could not load window.localStorage');
    });
};

// check if the app is being used for the first time
// the key is "FirstTime"
export const isFirstTime = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        // Get the token from window.localStorage as TavernProfileModels.AuthToken
        let res: boolean;
        const token = await window.localStorage.getItem('FirstTime');
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
        // Get the token from window.localStorage as TavernProfileModels.AuthToken
        await window.localStorage.setItem(
            'FirstTime',
            JSON.stringify(true)
        );
        resolve();
    });
};
