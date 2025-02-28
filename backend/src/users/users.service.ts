import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser(fullName: string, email: string, passwordHash: string) {
    const userByEmail = await this.findOneByEmail(email);
    if (userByEmail) throw new UnauthorizedException('Email already exists');

    const user = this.userRepository.create({
      fullName,
      email,
      passwordHash,
    });
    return await this.userRepository.save(user);
  }
}
