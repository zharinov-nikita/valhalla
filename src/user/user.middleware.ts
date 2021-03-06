import { Injectable, NestMiddleware, Req, Res } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { AuthorizationUserDto } from './dto/authorization-user.dto'
import { UserService } from './user.service'

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(
    @Req() req: { headers: AuthorizationUserDto },
    @Res() res: Response,
    next: NextFunction
  ) {
    const { login, password } = req.headers
    const isBody = login && password

    if (isBody) {
      const user = await this.userService.authorization({ login, password })

      if (user) {
        return next()
      }

      return res
        .status(404)
        .json({ statusCode: 404, message: `User ${login} does not exist` })
    }
    return res.status(403).json({ statusCode: 403, message: `Access denied` })
  }
}
