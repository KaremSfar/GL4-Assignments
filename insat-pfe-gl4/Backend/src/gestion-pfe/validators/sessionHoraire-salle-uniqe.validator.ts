import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { SalleSoutenanceEntity } from '../entities/salle-soutenance.entity';
import { SessionHoraireEntity } from '../entities/sessionHoraire.entity';
import { SoutenanceService } from '../services/soutenance.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class SessionHoraireSalleUniqueConstraint
  implements ValidatorConstraintInterface {
  constructor(private service: SoutenanceService) {}

  async validate(sessionHoraire: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const salle: SalleSoutenanceEntity = (args.object as any)[
      relatedPropertyName
    ];
    return await this.service.checkContrainstHoraireSalle(
      salle,
      sessionHoraire as SessionHoraireEntity,
    );
  }
}

export function checkSessionHoraireSalleUnique(
  property = 'salle',
  validationOptions?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: SessionHoraireSalleUniqueConstraint,
    });
  };
}
//TODO: test this decorator
