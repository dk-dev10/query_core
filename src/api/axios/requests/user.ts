import type { CreateUser, User } from '../types/user';
import { post } from '../utils/http';

export const createUser = async (args: CreateUser): Promise<User> =>
  await post<User, CreateUser>('/api/users/login', args);
