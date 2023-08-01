import { UserResponse } from './responses'

export type JwtTokenPayload = Pick<UserResponse, 'username'>
