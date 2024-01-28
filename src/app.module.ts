import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import MongodbModule from './dal/MongodbModule';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import HTTPLoggerMiddleware from './global/loggers/HTTPLoggerMiddleware';
// import RedisModule from './dal/redis.options';
// import PostgresModule from './dal/postgres.options';

@Module({
  imports: [UsersModule, MongodbModule],
  // imports: [UsersModule, MongodbModule, RedisModule, PostgresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes('*');
  }
}
