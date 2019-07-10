import { BaseContext } from "koa";
import UserService from "./service";
import User from "../entities/user";

export default class UserController {

  public static async getUsers(ctx: BaseContext) {
    const users: User[] = await UserService.getUsers()
    ctx.status = 200;
    ctx.body = users;
  }

  public static async getUserById(ctx: BaseContext) {
    ctx.status = 200;
    ctx.body = await UserService.getUserById(ctx.params.id);
  }
  
  public static async addUser(ctx: BaseContext) {
    const user: User = ctx.request.body;
    ctx.status = 200; 
    ctx.body = await UserService.addAndUpdateUser(user);
  }

  public static async updateUser(ctx: BaseContext) {
    const findUser = await UserService.getUserById(ctx.params.id);
    if(!findUser) {
      ctx.status = 400;
      ctx.body = 'user is not exists!'
    } else {
      ctx.status = 200; 
      ctx.body = await UserService.addAndUpdateUser(Object.assign(findUser, ctx.request.body));
    }
  }

  public static async deleteUser(ctx: BaseContext) {
    const findUser = await UserService.getUserById(ctx.params.id);
    if(!findUser) {
      ctx.status = 400;
      ctx.body = 'user is not exists!'
    } else {
      ctx.status = 200; 
      await UserService.deleteUser(findUser);
    }
  }
}