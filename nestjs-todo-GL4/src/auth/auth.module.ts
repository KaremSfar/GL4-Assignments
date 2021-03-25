import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from './entities/user.entity';
import { PassportJwtStrategy } from './strategy/passport-jwt.strategy';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  controllers: [AuthController],
  providers: [AuthService,PassportJwtStrategy],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({defaultStrategy:'jwt'}), // last step : stratégie de gestion JWT Token, 
    // Strategy => il doit interagir avec le token lui indiquant par exemple quel secret utiliser pour decoder le token; que faire avec le token et comment le récupérer.
    // Strategy => l'implémentation de la méthode validate, appelé a chaque fois qu'on intercepte le token pour le valider
    JwtModule.register({ // offre le jwt services : sign : genere le token a partir du payload; verify : prend token et le vérifie; decode : gives payload a partir de token
      secret: process.env.SECRET,
      signOptions:{
        expiresIn: 3600 // durée de vie en seconde
      }
    })
  ],
  exports: [PassportJwtStrategy,PassportModule]
})
export class AuthModule {}
