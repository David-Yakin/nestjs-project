import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyToken } from 'src/auth/helpers/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const { headers } = req;
    const token = headers['x-auth-token'] as string;
    if (!token) return false;

    const userInfo = verifyToken(token);
    if (!userInfo) return false;
    return true;
  }
}
