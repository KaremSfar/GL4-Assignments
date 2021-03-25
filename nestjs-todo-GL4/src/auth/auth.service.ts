import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserLogineDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ){}


    async register(userSubscribeDto: UserSubscribeDto): Promise<Partial<UserEntity>> {
        const user = this.userRepository.create({
            ...userSubscribeDto
        });
        //creer salt
        user.salt = await bcrypt.genSalt();
        //hasher son mdp
        user.password = await bcrypt.hash(user.password,user.salt);
        try{
            await this.userRepository.save(user);
        }catch(e){
            throw new ConflictException('username ou email redondant. must be unique')
        }

        return {
            id:user.id,
            username:user.username,
            email:user.email,
            role:user.role
        }
        
    }


    async login(credentials: UserLogineDto){
        //recuperer username + pwd
        const {username,password} = credentials;
        //verifier s'il existe un utilisateur avec ce username
        const user = await this.userRepository.findOne({username});

        if(!user) throw new NotFoundException('username ou password erroné');
        
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            };
            const jwt = this.jwtService.sign(payload);
            return {"access-token": jwt}
        }
        throw new NotFoundException('username ou password erroné');
    }
    


}
