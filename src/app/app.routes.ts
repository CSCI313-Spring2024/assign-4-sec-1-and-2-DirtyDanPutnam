import { Routes } from '@angular/router';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    title: 'Contact List',
  },
  {
    path: 'edit/:id',
    component: EditContactComponent,
    title: 'Edit Component',
  },
  {
    path: 'add',
    component: AddContactComponent,
    title: 'Add Componenet',
  },
];
