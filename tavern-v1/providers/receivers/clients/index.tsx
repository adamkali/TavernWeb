<<<<<<< HEAD
import UserClient from './User';
import CharacterClient from './Character';
import AuthClient from './Auth';

export {
  UserClient,
  CharacterClient,
  AuthClient,
  };
=======
import * as Requests from "./TavernProfile";

export default {
    login: Requests.Login,
    signup: Requests.Signup,
    verify: Requests.Verify,
    me: Requests.Me,
} as const;
>>>>>>> Vaporwave
