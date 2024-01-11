import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyToken } from 'src/auth/helpers/jwt';
import TokenInterface, {
  UserPayloadInterface,
} from 'src/auth/interfaces/TokenInterface';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req: UserPayloadInterface = context.switchToHttp().getRequest();
      const { headers } = req;
      const token = headers['x-auth-token'] as string;
      if (!token) return false;

      const userInfo = verifyToken(token) as TokenInterface;
      if (!userInfo) return false;

      req.user = userInfo;
      return true;
    } catch (error) {
      return false;
    }
  }
}
