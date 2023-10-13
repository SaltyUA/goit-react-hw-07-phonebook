import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContactByID, getContacts, postContact } from 'services/mockAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  () => getContacts()
);

export const addContact = createAsyncThunk('contacts/addContact', contact =>
  postContact(contact)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteContactByID(id)
);
