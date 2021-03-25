import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'supertest';
import { AppService } from './app.service';



// Controlleur abus de language .. un vrai controlleur c'est la methode (handler ?)
// REST :D

// un controlleur c'est une classe annotée par @Controller contenant un groupement de méthodes permettant de gérer les requetes http envoyée par vos clients
// WE CAN PREFIX ALL OF OUR CONTROLLER METHODS @Controller('URI')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ROUTING 
  // Une route va indentitfier l'uri associé a une action 
  // Les annotations qui prennent en parametre l'uri à gérer



  // L'objet Request 
  // @Request() 
  // @Param(key?)
  // @Body(key?)
  // @Query(key?) => récupère les queryParams envoyé en GET
  // @Headers(name?) => récupère les Headers
  // @Ip
  @Get()
  getHello(@Req() request: Request): string {
    return this.appService.getHello();
  }
}
