import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { ContactForm } from './components/Form/Form';
import { ContactList } from './components/List/List';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors.js';
import { selectError } from 'redux/selectors.js';
import { Filter } from './components/Filter/Filter';


export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);


  return (
    <>
    {error && <p>{error}</p>}

    {isLoading? (
        <p>Wait a little... </p>
      ) : (
        <div
        style={{
          width: 400,
          padding: '12px 16px',
          borderRadius: 20,
          backgroundColor: '#006d00',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
  
        <h2>Contacts</h2>
        <Filter />
  
        <ContactList />
      </div>
      )}
    </>
  );
};