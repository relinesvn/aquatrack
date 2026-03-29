import DrinkAdderMenu from './DrinkAdderMenu';
import DrinkList from './DrinkList';

function Main({ drinks, likedDrinks, filter, onToggleLike, onDelete }) {
  return (
    <main className="main">
      <div className="main__inner">
        <DrinkAdderMenu />
        <DrinkList
          drinks={drinks}
          likedDrinks={likedDrinks}
          filter={filter}
          onToggleLike={onToggleLike}
          onDelete={onDelete}
        />
      </div>
    </main>
  );
}

export default Main;