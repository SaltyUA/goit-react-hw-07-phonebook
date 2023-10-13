import Form from './form';
import ContactList from './contactList';
import FilterInput from './filterInput';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // useEffect(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   if (localContacts && JSON.parse(localContacts).length !== 0)
  //     setContacts(JSON.parse(localContacts));
  // }, []);
  // const submitContact = ({ name, number }) => {
  //   const id = nanoid();
  //   setContacts(prev => [...prev, { id, name, number }]);
  // };
  // useEffect(() => {
  //   contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const getFilteredContacts = () =>
    contacts &&
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts && contacts.length > 0 ? (
        <FilterInput />
      ) : (
        <p>There are no contacts yet</p>
      )}
      {contacts && getFilteredContacts().length > 0 && (
        <ContactList contacts={getFilteredContacts()} />
      )}
    </div>
  );
};

export default App;
