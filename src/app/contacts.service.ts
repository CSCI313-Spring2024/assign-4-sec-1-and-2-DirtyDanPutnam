import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contact-data';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  addContact(fName: string, lName: string, phoneNum: string, email: string) {
    CONTACTS.push({ fName, lName, phoneNum, email });
  }

  updateContact(
    index: number,
    fName: string,
    lName: string,
    email: string,
    phoneNum: string
  ) {
    CONTACTS[index] = { fName, lName, phoneNum, email };
  }

  deleteContact(id: number) {
    CONTACTS.splice(id, 1);
  }
}
