import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";

export const GetUser = createParamDecorator((data,ctx: ExecutionContext): Partial<UserEntity> => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
})