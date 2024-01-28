import { Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

class HTTPLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const start = new Date();
    const { method, originalUrl } = req;
    res.on('finish', () => {
      const end = new Date();
      const duration = end.getTime() - start.getTime();
      const statusCode = res.statusCode;
      const statusMessage = res.statusMessage;

      statusCode >= 400
        ? this.logger.error(
            `${method} ${originalUrl} - ${statusCode} - ${duration}ms ${statusMessage}`,
          )
        : this.logger.log(`${method} ${originalUrl} - ${duration}ms`);
    });

    next();
  }
}

export default HTTPLoggerMiddleware;
