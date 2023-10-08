import { Injectable }      from '@nestjs/common'

import { SignIn }          from '@/auth/inputs/sign-in.input'
import { DatabaseService } from '@code-gear/api/common'
import { User }            from '@code-gear/api/common'

@Injectable()
export class UsersRepository {
  constructor(private prisma: DatabaseService) {}

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
