import axios from 'axios';

axios.defaults.baseURL = 'https://65290ec055b137ddc83e236c.mockapi.io';

export async function getContacts() {
  const response = await axios('/contacts');
  return response.data;
}

export async function postContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContactByID(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
