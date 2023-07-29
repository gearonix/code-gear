import * as bcrypt from 'bcryptjs'

import { UsersService } from '@/modules/users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { SignIn } from './dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) {}

  async validate(payload: SignIn) {
    const user = await this.usersService.getUserByUsername(payload.username)

    if (!user) {
      return this.registerUser(payload)
    }

    const isPasswordEquals = await bcrypt.compare(
      payload.password,
      user.password
    )

    if (!isPasswordEquals) {
      return null
    }

    return user
  }

  async registerUser(payload: SignIn) {
    const hashPassword = await bcrypt.hash(payload.password, 5)

    return this.usersService.createUser({
      ...payload,
      password: hashPassword
    })
  }

  async generateToken(username: string) {
    const accessToken = this.jwtService.sign({
      payload: { username }
    })

    return { accessToken }
  }
}
