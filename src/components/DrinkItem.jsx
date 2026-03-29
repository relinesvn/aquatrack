import FavoriteButton from './FavoriteButton';

function DrinkItem({ drink, liked, onToggleLike, onDelete, onEdit }) {
  const { id, name, category, volume, sugar, calories, photo } = drink;

  return (
    <div className={`drink-item ${liked ? 'drink-item--liked' : ''}`}>
      {photo && (
        <img className="drink-item__photo" src={photo} alt={name} />
      )}
      <div className="drink-item__header">
        <span className="drink-item__name">{name}</span>
        <div className="drink-item__actions">
          <span className="drink-item__category">{category}</span>
          <FavoriteButton liked={liked} onToggle={() => onToggleLike(id)} />
          <button
            className="edit-btn"
            onClick={() => onEdit(drink)}
            title="Редагувати"
          >
            ✏️
          </button>
          <button
            className="delete-btn"
            onClick={() => onDelete(id)}
            title="Видалити"
          >
            🗑️
          </button>
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