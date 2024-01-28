import { sign, verify } from 'jsonwebtoken';
import TokenInterface from '../interfaces/TokenInterface';

const JWT_KEY = process.env.JWT_KEY || 'my-private-key';

export const generateAuthToken = (payload: TokenInterface) =>
  sign(payload, JWT_KEY);

export const verifyToken = (tokenFromClient: string) =>
  verify(tokenFromClient, JWT_KEY);
