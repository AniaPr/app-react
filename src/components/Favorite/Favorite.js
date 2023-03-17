import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

  if (favoriteCards.length === 0) return <Navigate to='/' />;

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.column}>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            id={card.id}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
