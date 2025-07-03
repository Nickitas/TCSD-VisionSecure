import { User } from './user.interface'

export type GetUserByIDParams = Pick<User, 'id'>;

export type GetUserByIDResponse = {
    user: User;
}