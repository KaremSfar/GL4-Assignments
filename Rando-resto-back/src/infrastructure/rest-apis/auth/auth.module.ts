import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { PassportJwtStrategy } from './strategies/passport-jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepo } from 'src/infrastructure/database/repositories/customer.repo';
import { RestoOwnerRepo } from 'src/infrastructure/database/repositories/resto-owner.repo';
import { JwtSerivceC } from './service/jwt.service';
import { PayloadSigner } from 'src/application/services/payload-signer';
import { RepositoryFactory } from 'src/application/services/repo.factory';
import { AuthInteractor } from 'src/application/use-cases/auth-interactor';
import { CustomerEntity } from 'src/infrastructure/database/mapper/customer.entity';
import { RestoOwnerEntity } from 'src/infrastructure/database/mapper/resto-owner.entity';

@Module({
  imports: [
    //TypeormModule is imported from the Entities Module
    //Important Note, If the Repos were to also be exported from the Entities module, it would end in an error
    //I think it's because nest will try to inject the Repo by itself, not through the imported TypeOrm Module
    //While if all is exported/imported, and then typepeorm is redefined in here, it will be prioritized ?
    //TypeOrmModule.forFeature([OwnerRepository, VetRepository]),

    //Using Repos and Entities
    TypeOrmModule.forFeature([CustomerEntity, RestoOwnerEntity]),
    //Passport JWT Strategy
    PassportModule.register({ defaultStrategy: 'jwt' }),
    //Signing and verifying Module
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 36000,
      },
    }),
  ],
  // Providers are the Services used from within the Module For the Module
  providers: [
    // Injected into the Authentication Service to Sign the payload
    PassportJwtStrategy,
    { provide: 'CustomerRepository', useClass: CustomerRepo },
    { provide: 'RestoOwnerRepository', useClass: RestoOwnerRepo },
    { provide: PayloadSigner, useClass: JwtSerivceC },
    RepositoryFactory,
    AuthInteractor,
  ],
  controllers: [AuthController],
  exports: [],
})

// Whenever Authentication is needed, use @UseGuards(AuthGuard('jwt'))
// Passport strategy used is JWT strategy
export class AuthModule {}
