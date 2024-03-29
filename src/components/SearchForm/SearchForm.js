import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { search } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState(
    useSelector((state) => state.searchString)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search…'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
