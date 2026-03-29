import DrinkAdderMenu from './DrinkAdderMenu';
import DrinkList from './DrinkList';

function Main({
  drinks, likedDrinks, filter,
  onAddDrink, onUpdateDrink,
  onToggleLike, onDelete,
  editDrink, onEditDrink,
}) {
  return (
    <main className="main">
      <div className="main__inner">
        <DrinkAdderMenu
          onAddDrink={onAddDrink}
          onUpdateDrink={onUpdateDrink}
          editDrink={editDrink}
          onEditDrink={onEditDrink}
        />
        <DrinkList
          drinks={drinks}
          likedDrinks={likedDrinks}
          filter={filter}
          onToggleLike={onToggleLike}
          onDelete={onDelete}
          onEditDrink={onEditDrink}
        />
      </div>
    </main>
  );
}

export default Main;