import { User } from './user.interface';

type UserId = Pick<User, 'id'>;

type UserBody = Omit<User, 'id' | 'created_at' | 'updated_at'>;

export type EditUserParams = {
    id: UserId;
    body: UserBody;
}

export type EditUserResponse = void;