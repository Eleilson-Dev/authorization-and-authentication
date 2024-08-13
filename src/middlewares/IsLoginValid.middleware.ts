import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/appError';

export class IsLoginValid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await prisma.user.findFirst({
        where: { email: req.body.email },
      });

      if (!user) {
        throw new AppError(403, 'Email and password doesnt match');
      }

      const compare = await bcrypt.compare(req.body.password, user.password);

      if (!compare) {
        throw new AppError(403, 'Email and password doesnt match');
      }

      const accessToken = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '24h' }
      );

      res.locals.accessToken = accessToken;
      res.locals.user = user;

      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
