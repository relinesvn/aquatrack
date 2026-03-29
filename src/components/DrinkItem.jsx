function DrinkItem({ name, category, volume, sugar, calories }) {
  return (
    <div className="drink-item">
      <div className="drink-item__header">
        <span className="drink-item__name">{name}</span>
        <span className="drink-item__category">{category}</span>
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