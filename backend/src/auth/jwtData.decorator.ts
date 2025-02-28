import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from './entity/jwtPayload.entity';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user?: JwtPayload;
}

export const GetUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    if (!request.user) throw new Error('User not found in request object');

    // If specific property is requested, return only that property
    if (data) {
      return request.user[data];
    }

    // Otherwise return the entire payload
    return request.user;
  },
);
