import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(userName);
    if (user && user.password === password) return this.login(user);
    if (!user)
      return {
        message: 'Invalid User',
      };

    return {
      message: 'invalid Password',
    };
  }

  async login(user: any) {
    const payload = {
      userName: user.userName,
      email: user.email,
      firstName: user.firstName,
    };
    return this.jwtService.sign(payload);
  }
}
