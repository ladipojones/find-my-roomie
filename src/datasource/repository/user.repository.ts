import { User } from '../models';
import { IUser } from '../interfaces/user';
import { injectable } from 'tsyringe';

@injectable()
class UserRepository {
    private readonly db = User;

    async createUser(user: IUser): Promise<IUser> {
        return await this.db.create(user);
    }

    async getUsers(): Promise<IUser[]> {
        return await this.db.find({});
    }

    async findOne(params: string): Promise<IUser | null> {
        return await this.db.findOne({ _id: params });
    }
}

export { UserRepository };
