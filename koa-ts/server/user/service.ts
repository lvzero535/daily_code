import { Repository, getRepository } from "typeorm";
import User from "../entities/user";

export default class UserService {
  private static repositoryUser(): Repository<User> {
    return getRepository(User);
  }

  public static async getUsers({offset = 0, limit = 5, username = ''}) {
    return this.repositoryUser()
            .createQueryBuilder('user')
            .where('user.username like :name', {name: `%${username}%`})
            .skip(offset).take(limit).getManyAndCount();
  }

  public static async getUserById(id: string) {
    return this.repositoryUser().findOne(id);
  }

  public static async addAndUpdateUser(user: User) {
    return this.repositoryUser().save(user);
  }

  public static async deleteUser(user: User) {
    return this.repositoryUser().remove(user);
  }
}