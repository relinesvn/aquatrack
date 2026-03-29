import DrinkItem from './DrinkItem';

function DrinkList() {
  return (
    <div className="drink-list">
      <h2 className="drink-list__title">Список напоїв</h2>
      <DrinkItem name="Чиста вода" category="Вода" volume={250} sugar={0} calories={0} />
      <DrinkItem name="Капучино" category="Кава" volume={300} sugar={10} calories={120} />
      <DrinkItem name="Зелений чай" category="Чай" volume={200} sugar={0} calories={2} />
    </div>
  );
}

export default DrinkList;