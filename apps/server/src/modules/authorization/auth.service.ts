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
      return null
    }

    // const isPasswordEquals = await bcrypt.compare(
    //   payload.password,
    //   user.password
    // )

    const isPasswordEquals = payload.password === user.password

    if (!isPasswordEquals) {
      return null
    }

    return user
  }

  async login(payload: SignIn) {
    return this.generateToken(payload.username)
  }

  async registerUser(payload: SignIn) {
    const hashPassword = await bcrypt.hash(payload.password, 5)

    await this.usersService.createUser({
      ...payload,
      password: hashPassword
    })

    return this.generateToken(payload.username)
  }

  async generateToken(username: string) {
    const accessToken = this.jwtService.sign({
      payload: { username }
    })

    return { accessToken }
  }
}
