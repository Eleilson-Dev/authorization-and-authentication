import { injectable } from 'tsyringe';
import { IUserData, TUserLogin } from '../interfaces/user.interface';
import { prisma } from '../database/prisma';
import { userDataSchema } from '../schemas/user.schemas';
import bcrypt from 'bcryptjs';

@injectable()
export class UsersServices {
  public createUser = async (userCreateData: IUserData) => {
    const hash = await bcrypt.hash(userCreateData.password, 10);

    const response = await prisma.user.create({
      data: { ...userCreateData, password: hash },
    });

    return response;
  };

  public loginUser = (userData: TUserLogin, token: string) => {
    const user = userDataSchema.parse(userData);

    return { user, token };
  };

  public findUser = async (userId: number) => {
    const user = await prisma.user.findFirst({ where: { id: userId } });

    return user;
  };
}
