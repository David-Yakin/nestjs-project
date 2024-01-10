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
  UsePipes,
  ValidationPipe,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user-info.dto';
import { UsersService } from './users.service';
import { AdminGuard } from 'src/auth/guards/admin/admin.guard';
import { LoginDTO } from './dto/login.dto';

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
  @UsePipes(ValidationPipe)
  async register(@Body(new ValidationPipe()) user: RegisterUserDto) {
    try {
      const userFromDB = await this.usersService.createNewUser(user);
      return userFromDB;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body(new ValidationPipe()) user: LoginDTO) {
    try {
      const token = await this.usersService.login(user);
      return token;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
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
