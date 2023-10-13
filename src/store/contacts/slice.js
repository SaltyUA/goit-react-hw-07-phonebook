import { createContactObject } from './helpers';
import { initialState } from './initialState';

const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: createContactObject,
      reducer: (state, { payload }) => {
        state.contacts
          ? state.contacts.push(payload)
          : (state.contacts = [payload]);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
