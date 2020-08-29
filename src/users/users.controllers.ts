import {
  Controller,
  Post,
  Body,
  HttpCode
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersControllers {
  constructor(private readonly _userService: UsersService) {}

  @Post()
  @HttpCode(204)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const status = await this._userService.create(
      createUserDto.username, createUserDto.password, createUserDto.email
    );

  }
}