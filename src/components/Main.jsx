import DrinkAdderMenu from './DrinkAdderMenu';
import DrinkList from './DrinkList';

function Main({ drinks }) {
  return (
    <main className="main">
      <div className="main__inner">
        <DrinkAdderMenu />
        <DrinkList drinks={drinks} />
      </div>
    </main>
  );
}

export default Main;