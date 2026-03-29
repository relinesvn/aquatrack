import DrinkItem from './DrinkItem';

function DrinkList({ drinks }) {
  return (
    <div className="drink-list">
      <h2 className="drink-list__title">
        Список напоїв ({drinks.length})
      </h2>

      {drinks.length === 0 ? (
        <p className="drink-list__empty">Ще немає жодного напою 💧</p>
      ) : (
        drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} />
        ))
      )}
    </div>
  );
}

export default DrinkList;