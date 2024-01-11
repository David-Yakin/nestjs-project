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
  Req,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user-info.dto';
import { UsersService } from './users.service';
import { AdminGuard } from 'src/auth/guards/admin/admin.guard';
import { LoginDTO } from './dto/login.dto';
import { LoginGuard } from 'src/auth/guards/login/login.guard';
import { UserPayloadInterface } from 'src/auth/interfaces/TokenInterface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Get()
  // @UseGuards(LoginGuard)
  // getUsers() {
  //   try {
  //     return [];
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

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
  // @UsePipes(ValidationPipe)

  @Put(':userId')
  @UseGuards(LoginGuard)
  updateUserInfo(
    @Req() req: UserPayloadInterface,
    @Param('userId') userId: string,
  ) {
    try {
      if (req.user._id !== userId) throw new UnauthorizedException();
      return { message: 'success' };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  // @Put(':userId')
  // @UseGuards(LoginGuard)
  // async updateUserInfo(
  //   @Req() req: UserPayloadInterface,
  //   @Param('userId') userId: string,
  //   @Body(new ValidationPipe()) user: RegisterUserDto,
  // ) {
  //   try {
  //     console.log(req.user, userId);
  //     if (req.user._id !== userId) throw new UnauthorizedException();
  //   } catch (error) {
  //     throw new BadRequestException(error);
  //   }
  // }

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

  @Patch(':userId')
  changeStatus(@Param('userId') userId: string) {}

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {}
}
