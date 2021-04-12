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
    if (!user)
      return {
        message: 'Invalid User',
      };
    if (user && user.password === password) {
      const result = this.login(user);
      return result;
    }
    return {
      message: 'invalid Password',
    };
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
