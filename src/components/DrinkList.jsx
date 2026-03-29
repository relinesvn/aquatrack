import DrinkItem from './DrinkItem';

function DrinkList({ drinks, likedDrinks, filter, onToggleLike, onDelete, onEditDrink }) {
  const visible = filter === 'liked'
    ? drinks.filter(d => likedDrinks.has(d.id))
    : drinks;

  return (
    <div className="drink-list">
      <h2 className="drink-list__title">
        {filter === 'liked' ? '❤️ Улюблені напої' : 'Список напоїв'}
        <span className="drink-list__count">{visible.length}</span>
      </h2>

      {visible.length === 0 ? (
        <p className="drink-list__empty">
          {filter === 'liked'
            ? 'Немає улюблених напоїв. Натисніть ❤️ на картці!'
            : 'Ще немає жодного напою 💧'}
        </p>
      ) : (
        visible.map(drink => (
          <DrinkItem
            key={drink.id}
            drink={drink}
            liked={likedDrinks.has(drink.id)}
            onToggleLike={onToggleLike}
            onDelete={onDelete}
            onEdit={onEditDrink}
          />
        ))
      )}
    </div>
  );
}

export default DrinkList;