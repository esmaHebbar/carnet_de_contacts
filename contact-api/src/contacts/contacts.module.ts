import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])], //rend le repository Contact de postgreeSQL disponible dans ce module.
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
