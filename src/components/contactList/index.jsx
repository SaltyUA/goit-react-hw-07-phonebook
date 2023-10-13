import ContactItem from 'components/contactItem';
import ListStyled from './List.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selectors';
import FilterInput from 'components/filterInput';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      <FilterInput />
      {contacts.length > 0 ? (
        <ListStyled>
          {contacts.map(({ id, name, number }) => (
            <ContactItem name={name} key={id} number={number} id={id} />
          ))}
        </ListStyled>
      ) : (
        <p>Have no any contacts</p>
      )}
    </>
  );
};

export default ContactList;
