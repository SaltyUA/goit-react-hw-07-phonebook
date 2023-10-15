import Form from './form';
import ContactList from './contactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'store/contacts/thunks';
import { selectError, selectIsLoading } from 'store/selectors';
import Skeleton from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => error && toast.warning(error), [error]);
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {isLoading && <Skeleton count={5} />}
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default App;
