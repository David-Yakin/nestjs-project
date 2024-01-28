import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import UsersCollection from './dal/usersInMongodb';

@Module({
  imports: [UsersCollection],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
