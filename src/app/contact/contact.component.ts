import { Component, inject, Input } from '@angular/core';
import { Contact } from '../../models/contact';
import { RouterLink } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() contact!: Contact;
  @Input() id!: number;

  contactsService = inject(ContactsService);

  deleteContact() {
    this.contactsService.deleteContact(this.id);
  }
}
