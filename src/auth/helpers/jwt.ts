import { sign, verify } from 'jsonwebtoken';
import TokenInterface from '../interfaces/TokenInterface';

const JWT_KEY = 'my-private-key';

export const generateAuthToken = (user: TokenInterface) => sign(user, JWT_KEY);

export const verifyToken = (tokenFromClient: string) =>
  verify(tokenFromClient, JWT_KEY);
