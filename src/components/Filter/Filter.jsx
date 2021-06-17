import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { filteredContact } from '../../redux/actions/phonebook-actions';
import { getFilter } from '../../redux/actions/phonebook-selectors';


export default function Filter () {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = useCallback(event => dispatch(filteredContact(event)), [dispatch]);

  return (
      <form>
        <label>
          <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          placeholder="Find person"
          />
        </label>
      </form>
  )
}


