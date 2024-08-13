import { Request, Response } from 'express';
import { UsersServices } from '../services/Users.services';
import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';

@injectable()
export class UsersController {
  constructor(@inject('usersServices') private usersServices: UsersServices) {}

  public createUser = async (req: Request, res: Response) => {
    const response = await this.usersServices.createUser(req.body);

    return res.status(200).json(response);
  };

  public loginUser = (req: Request, res: Response) => {
    const response = this.usersServices.loginUser(
      res.locals.user,
      res.locals.accessToken
    );

    return res.status(200).json(response);
  };

  public findUser = async (req: Request, res: Response) => {
    const response = await this.usersServices.findUser(Number(req.params.id));

    return res.status(200).json(response);
  };
}
