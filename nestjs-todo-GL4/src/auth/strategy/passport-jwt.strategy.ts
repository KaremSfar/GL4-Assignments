import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import * as dotenv from 'dotenv';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { UnauthorizedException } from "@nestjs/common";

dotenv.config();

export class PassportJwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserEntity) 
        private userRepository : Repository<UserEntity>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        });
    }

    async validate(payload) { //we can define the payload interface
        const user = await this.userRepository.findOne({username: payload.username});
        if(user){
            delete user.salt;
            delete user.password;

            return user; // this gets injected in request !
        } else throw new UnauthorizedException();
    }
}