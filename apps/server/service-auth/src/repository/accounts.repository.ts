import { Injectable }      from '@nestjs/common'

import { DatabaseService } from '@code-gear/api/common'
import { User }            from '@code-gear/api/common'
import { SignIn }          from '@code-gear/api/contracts'

@Injectable()
export class AccountsRepository {
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
