import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class AppService {
  prisma = new PrismaClient();

  async getHello(): Promise<User[]> {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }
}
