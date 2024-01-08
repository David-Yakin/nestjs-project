import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user-info.dto';
import { UsersService } from './users.service';
import { AdminGuard } from 'src/auth/guards/admin/admin.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(AdminGuard)
  getUsers() {
    try {
      return [];
    } catch (error) {
      return error.message;
    }
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    try {
      return { userId };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  register(@Body(new ValidationPipe()) user: RegisterUserDto) {
    return user;
  }

  @Put(':userId')
  updateUserInfo(
    @Param('userId') userId: string,
    @Body() user: UpdateUserDto,
  ) {}

  @Patch(':userId')
  changeStatus(@Param('userId') userId: string) {}

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {}
}
