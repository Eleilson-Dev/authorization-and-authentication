import { Router } from 'express';
import { container } from 'tsyringe';
import { UsersController } from '../controllers/Users.controller';
import { UsersServices } from '../services/Users.services';
import { ValidateBody } from '../middlewares/ValidateBody.middleware';
import { userCreateSchema } from '../schemas/user.schemas';
import { IsLoginValid } from '../middlewares/IsLoginValid.middleware';
import { VerifyToken } from '../middlewares/VerifyToken.middleware';

container.registerSingleton('usersServices', UsersServices);
const usersController = container.resolve(UsersController);

export const userRouter = Router();

userRouter.post(
  '/create/user',
  ValidateBody.execute(userCreateSchema),
  (req, res) => usersController.createUser(req, res)
);

userRouter.post('/login/user', IsLoginValid.execute, (req, res) =>
  usersController.loginUser(req, res)
);

userRouter.get('/find/user/:id', VerifyToken.execute, (req, res) =>
  usersController.findUser(req, res)
);
