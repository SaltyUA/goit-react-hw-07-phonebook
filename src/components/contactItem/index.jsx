import { useDispatch } from 'react-redux';
import { ContactTypography, DeleteButton } from './ContactItem.styled';
import { deleteContact } from 'store/contacts/thunks';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactTypography>
      {name}: {number}
      <DeleteButton onClick={handleDelete} type="button">
        Delete
      </DeleteButton>
    </ContactTypography>
  );
};

export default ContactItem;
