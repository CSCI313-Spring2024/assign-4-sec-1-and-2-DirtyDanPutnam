import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  fname: string = '';
  lname: string = '';
  phoneNum: string = '';
  email: string = '';

  contactsService = inject(ContactsService);

  addContact() {
    this.contactsService.addContact(
      this.fname,
      this.lname,
      this.phoneNum,
      this.email
    );
  }
}
