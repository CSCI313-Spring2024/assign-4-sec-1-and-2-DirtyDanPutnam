import { Component } from '@angular/core';
import { CONTACTS } from '../../data/contact-data';
import { ContactComponent } from '../contact/contact.component';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  imports: [ContactComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  CONTACT_LIST = CONTACTS;
}
