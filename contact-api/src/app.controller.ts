//exemple de controller : gère les requêtes entrantes
// un controller ne continernt pas de logique métier, il sert seulement aux routes
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //le préfixe de toutes les routes sera /contacts
export class AppController {
  constructor(private readonly appService: AppService) {}

}
