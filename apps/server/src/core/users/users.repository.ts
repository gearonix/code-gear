import { SignIn } from '@/auth/inputs/sign-in.input'
import { Injectable } from '@nestjs/common'

import { PrismaService } from '$/services'

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  public getUserByUsername(username: string) {
    return this.prisma.users.findUnique({
      where: {
        username
      }
    })
  }

  public createUser(user: SignIn) {
    return this.prisma.users.create({
      data: user
    })
  }
}
