import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

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
