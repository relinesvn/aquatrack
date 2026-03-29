import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

const initialDrinks = [
  { id: 1, name: 'Чиста вода',       category: 'Вода', volume: 250, sugar: 0,  calories: 0   },
  { id: 2, name: 'Капучино',         category: 'Кава', volume: 300, sugar: 10, calories: 120 },
  { id: 3, name: 'Зелений чай',      category: 'Чай',  volume: 200, sugar: 0,  calories: 2   },
  { id: 4, name: 'Апельсиновий сік', category: 'Сік',  volume: 250, sugar: 24, calories: 112 },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Main drinks={initialDrinks} />
      <Footer />
    </div>
  );
}

export default App;