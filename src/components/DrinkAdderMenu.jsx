function DrinkAdderMenu() {
  return (
    <div className="drink-adder">
      <h2 className="drink-adder__title">Додати напій</h2>
      <form className="drink-adder__form">
        <input
          className="drink-adder__input"
          type="text"
          placeholder="Назва напою"
        />
        <input
          className="drink-adder__input"
          type="number"
          placeholder="Об'єм (мл)"
        />
        <button className="drink-adder__btn" type="submit">
          Додати
        </button>
      </form>
    </div>
  );
}

export default DrinkAdderMenu;