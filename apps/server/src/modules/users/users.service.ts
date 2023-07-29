import { SignIn } from '@/modules/authorization/dto'
import { Injectable } from '@nestjs/common'

import { PrismaService } from '$/services'

@Injectable()
export class UsersService {
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
