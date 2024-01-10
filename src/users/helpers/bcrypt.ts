import { hashSync, compareSync } from 'bcryptjs';

export const generateUserPassword = (password: string) =>
  hashSync(password, 10);

export const comparePassword = (
  passwordFromClient: string,
  passwordFromDb: string,
) => compareSync(passwordFromClient, passwordFromDb);
