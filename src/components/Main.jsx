import DrinkAdderMenu from './DrinkAdderMenu';
import DrinkList from './DrinkList';

function Main() {
  return (
    <main className="main">
      <div className="main__inner">
        <DrinkAdderMenu />
        <DrinkList />
      </div>
    </main>
  );
}

export default Main;