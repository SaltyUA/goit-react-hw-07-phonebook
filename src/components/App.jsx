import Form from './form';
import ContactList from './contactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'store/contacts/thunks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
