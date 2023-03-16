import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      <li className={styles.card}>
        {title}
        <button
          type='button'
          className={clsx(isFavorite && styles.active)}
          onClick={handleClick}>
          <i className='fa fa-star-o'></i>
        </button>
      </li>
    </div>
  );
};

export default Card;
