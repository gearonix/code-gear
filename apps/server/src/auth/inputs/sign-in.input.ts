import { StringField } from '$/nest-common'
import { InputType } from '@nestjs/graphql'

@InputType()
export class SignIn {
  @StringField({ example: 'user123' })
  username: string

  @StringField({ example: 'password456' })
  password: string
}
