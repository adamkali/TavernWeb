import * as Requests from "./TavernProfile";

export default {
    login: Requests.Login,
    signup: Requests.Signup,
    verify: Requests.Verify,
    me: Requests.Me,
} as const;
