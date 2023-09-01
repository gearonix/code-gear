import { Injectable } from '@nestjs/common'
import { SignIn } from '@/auth/inputs/sign-in.input'
import { User } from '$/nest-common'
import { PrismaService } from '@code-gear/api/services'

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  public getUserByUsername(username: string): User {
    return this.prisma.user.findUnique({
      where: {
        username
      }
    })
  }

  public createUser(user: SignIn): User {
    return this.prisma.user.create({
      data: user
    })
  }
}
