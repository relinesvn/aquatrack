import FavoriteButton from './FavoriteButton';

function DrinkItem({ drink }) {
  const { name, category, volume, sugar, calories, photo } = drink;

  return (
    <div className="drink-item">
      {photo && (
        <img className="drink-item__photo" src={photo} alt={name} />
      )}
      <div className="drink-item__header">
        <span className="drink-item__name">{name}</span>
        <div className="drink-item__actions">
          <span className="drink-item__category">{category}</span>
          <FavoriteButton />
        </div>
      </div>
      <div className="drink-item__stats">
        <span>💧 {volume} мл</span>
        <span>🍬 {sugar} г</span>
        <span>🔥 {calories} ккал</span>
      </div>
    </div>
  );
}

export default DrinkItem;