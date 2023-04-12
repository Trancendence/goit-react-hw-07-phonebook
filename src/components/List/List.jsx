import { useDispatch, useSelector} from 'react-redux';
import { deleteContact } from '../../redux/operations.js';
import { selectVisibleContacts } from 'redux/selectors.js';
import css from './List.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};