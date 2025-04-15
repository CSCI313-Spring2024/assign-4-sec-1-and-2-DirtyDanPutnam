import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { CONTACTS } from '../../data/contact-data';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent implements OnInit {
  id!: number;

  fname: string = '';
  lname: string = '';
  phoneNum: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.fname = CONTACTS[this.id].fName;
    this.lname = CONTACTS[this.id].lName;
    this.phoneNum = CONTACTS[this.id].phoneNum;
    this.email = CONTACTS[this.id].email;
  }

  contactsService = inject(ContactsService);

  UpdateContact() {
    this.contactsService.updateContact(
      this.id,
      this.fname,
      this.lname,
      this.phoneNum,
      this.email
    );
  }
}
