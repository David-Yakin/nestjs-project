import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import RegisterInterface from './interface/RegisterInterface';
import UserFromClientInterface from './interface/UserFromClientInterface';
import LoginInterface from './interface/LoginInterface';
import { generateAuthToken } from 'src/auth/helpers/jwt';
import { comparePassword, generateUserPassword } from './helpers/bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModule: Model<RegisterInterface>,
  ) {}

  async createNewUser(user: RegisterUserDto) {
    try {
      const userFromMongoose = new this.userModule(user);
      const encryptedPassword = generateUserPassword(user.password);
      if (encryptedPassword) userFromMongoose.password = encryptedPassword;
      const userFromDB = await userFromMongoose.save();
      return userFromDB;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async login(user: LoginInterface) {
    try {
      const { email, password: passwordFromClient } = user;

      const userFromDb = await this.userModule.findOne({ email });
      if (!userFromDb) throw new Error('Invalid email or password');
      const { _id, isAdmin, password: passwordFromDB } = userFromDb;

      const validPassword = comparePassword(passwordFromClient, passwordFromDB);
      if (!validPassword) throw new Error('Invalid email or password');

      const token = generateAuthToken({ _id, isAdmin });

      return token;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
