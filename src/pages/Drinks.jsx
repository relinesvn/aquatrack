import Main from '../components/Main';

function Drinks({
  drinks, likedDrinks, filter,
  onAddDrink, onUpdateDrink,
  onToggleLike, onDelete,
  editDrink, onEditDrink,
}) {
  return (
    <Main
      drinks={drinks}
      likedDrinks={likedDrinks}
      filter={filter}
      onAddDrink={onAddDrink}
      onUpdateDrink={onUpdateDrink}
      onToggleLike={onToggleLike}
      onDelete={onDelete}
      editDrink={editDrink}
      onEditDrink={onEditDrink}
    />
  );
}

export default Drinks;