import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getAll() {
    return this.contactsService.getAll();
  }

  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactsService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.contactsService.delete(Number(id));
    return { message: 'Contact deleted' };
  }
}
