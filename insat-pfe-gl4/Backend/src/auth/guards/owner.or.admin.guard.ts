import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SujetPfeEntity } from 'src/gestion-pfe/entities/sujet-pfe.entity';
import { Repository } from 'typeorm';
import { Role } from '../enums/role.enum';

//Guard RapportPfe: if rapport is public let anyone access it,
//else only grant access to its owner and the admins
@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(
    @InjectRepository(SujetPfeEntity)
    private sujetPfeRepository: Repository<SujetPfeEntity>,
  ) {}

  // CanActivate returns a boolean to either accept or forbid user from entering a route
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const {
      user,
      params: { id },
    } = context.switchToHttp().getRequest();

    //if for some reason the user property is undefined block access
    if (!user) return false;
    //if Admin grant access
    if (user.role === Role.Admin) return true;

    //if the id property is not defined throw exception
    if (!id) throw new BadRequestException();

    // Get the student and public properties corresponding to the queried file
    const { student, rapportPfe } = await this.sujetPfeRepository.findOne({
      where: { rapportPfe: { id: id } },
    });

    // if is public or the student is the owner : grant access
    return user.id === student.id || rapportPfe.isPublic;
  }
}
