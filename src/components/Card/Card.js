import styles from './Card.module.scss';
import clsx from 'clsx';
import { removeCard, toggleFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

  const click = () => {
    dispatch(removeCard(id));
  };

  return (
    <div>
      <li className={styles.card}>
        {title}
        <div className={styles.buttons}>
          <button
            type='button'
            className={clsx(isFavorite && styles.active)}
            onClick={handleClick}>
            <i className='fa fa-star-o'></i>
          </button>
          <button type='button' onClick={click}>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Card;
