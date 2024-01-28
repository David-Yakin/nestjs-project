import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import MongodbModule from './dal/MongodbModule';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import HTTPLoggerMiddleware from './global/loggers/HTTPLoggerMiddleware';

@Module({
  imports: [UsersModule, MongodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes('*');
  }
}
