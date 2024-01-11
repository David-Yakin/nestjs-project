interface TokenInterface {
  _id: string;
  isAdmin: boolean;
  iat?: number;
}

export interface UserPayloadInterface extends Request {
  user: TokenInterface;
}

export default TokenInterface;
