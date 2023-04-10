import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h5 className={css.filterHeader}>Find contacts by name</h5>
      <input
        className={css.filter}
        type="text"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};