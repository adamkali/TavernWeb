import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { Endpoints } from '../../endpoints';
import Providable from "../../functors/Provideable";
import { getAuthHeaders } from '../Authenticate';
import * as TavernModels from "../models";

type RequestParams = {
    url: string,
    body: any,
    headers?: AxiosRequestHeaders,
};

// create a base function to use axios for get functions
export async function get(params: RequestParams ): Promise<Providable<any>> {
    const config: AxiosRequestConfig = {
        method: "GET",
        headers: params.headers,
    };
    const resp = await axios.get(params.url, config);
    return new Providable(resp.data);
}

// create a base function to use axios for post functions
export async function post(params: RequestParams ): Promise<Providable<any>> {
    const config: AxiosRequestConfig = {
        method: "POST",
        headers: params.headers,
    };
    const resp = await axios.post(params.url, params.body, config);
    return new Providable(resp.data);
}

// create a base function to use axios for put functions
export async function put(params: RequestParams ): Promise<Providable<any>> {
    const config: AxiosRequestConfig = {
        method: "PUT",
        headers: params.headers,
    };
    const resp = await axios.put(params.url, params.body, config);
    return new Providable(resp.data);
}

// create a base function to use axios for delete functions
export async function del(params: RequestParams ): Promise<Providable<any>> {
    const config: AxiosRequestConfig = {
        method: "DELETE",
        headers: params.headers,
    };
    const resp = await axios.delete(params.url, config);
    return new Providable(resp.data);
}

// make a login function
export async function Login(params: {
    body: TavernModels.TavernRequests.LoginRequest,
} ): Promise<Providable<TavernModels.TavernTypes.AuthToken>> {
    const p = {
        url: Endpoints.TavernProfile + "/login",
        body: params.body,        
    };
    const resp = await post(p);
    return resp;
}

export async function Signup(params: {
    body: TavernModels.TavernRequests.AuthRequest,
} ): Promise<Providable<TavernModels.TavernTypes.AuthToken>> {
    const p = {
        url: Endpoints.TavernProfile + "/signup",
        body: params.body,        
    };
    const resp = await post(p);
    return resp;
}

export async function Verify(params: {
    body: TavernModels.TavernRequests.VerifyRequest,
} ): Promise<Providable<TavernModels.TavernTypes.AuthToken>> {
    const p = {
        url: Endpoints.TavernProfile + "/verify",
        body: params.body,        
    };
    const resp = await post(p);
    return resp;
}

// User methods TODO: add more methods
export async function Me() {
    // get the auth headers
    const headers = getAuthHeaders();
    const p = {
        url: Endpoints.TavernProfile + "/auth/User/full",
        headers,
        body: {},
    };
    const resp = await get(p);
    return resp;
}