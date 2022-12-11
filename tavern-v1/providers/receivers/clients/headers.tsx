import { HeadersDefaults } from 'axios';

export default interface Config extends HeadersDefaults {
    Authorization: string;
}