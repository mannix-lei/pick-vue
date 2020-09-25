import { IRegisterUser } from '@/model/user';
import axios from '@/util/axios';

/**
 * login
 * @param username 用户名
 * @param password 密码
 */
export const login = async (username: string, password: string) => {
    return await axios.post('/auth/login', { username, password });
};

/**
 * register
 * @param user user info
 */
export const register = async (user: IRegisterUser) => {
    return await axios.post('/auth/register', { ...user });
};
