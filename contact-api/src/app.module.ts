//enregistre tous les modules du projet
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/contact.entity';

//décorateur = fonction de haut niveau qui peut ajouter des métadonnées ou changer comportement d'une autre déclaration
//@Module est un décorateur qui permet de regrouper @controller, @injectables (=services), autres modules.. et définir ce qui est exporté pour être réutilisé ailleurs
//@Module permet d'organiser le code par catégories fonctionnelles
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'contactuser', // ou 'postgres'
      password: 'password',
      database: 'contactdb',
      entities: [Contact],
      synchronize: true, // en dev seulement (crée la table auto)
    }),
    ContactsModule,
  ], //modules utilisés par ce module
  controllers: [], //routes http dispo dans ce module
  providers: [], //services(logique métier, accès bdd, fichiers, ...) dispo dans ce module
})
export class AppModule {}
