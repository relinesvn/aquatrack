import { useState, useEffect } from 'react';
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
  // Ініціалізатор — зчитує з localStorage при першому рендері
  const [drinks, setDrinks] = useState(() => {
    try {
      const saved = localStorage.getItem('aquatrack_drinks');
      return saved ? JSON.parse(saved) : initialDrinks;
    } catch {
      return initialDrinks;
    }
  });

  const [likedDrinks, setLikedDrinks] = useState(() => {
    try {
      const saved = localStorage.getItem('aquatrack_liked');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [filter, setFilter] = useState('all');

  // Синхронізація drinks → localStorage
  useEffect(() => {
    localStorage.setItem('aquatrack_drinks', JSON.stringify(drinks));
  }, [drinks]);

  // Синхронізація likedDrinks → localStorage
  useEffect(() => {
    localStorage.setItem('aquatrack_liked', JSON.stringify([...likedDrinks]));
  }, [likedDrinks]);

  const addDrink = (drink) => {
    setDrinks(prev => [...prev, drink]);
  };

  const toggleLike = (id) => {
    setLikedDrinks(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const deleteDrink = (id) => {
    setDrinks(prev => prev.filter(d => d.id !== id));
  };

  const toggleFilter = () => {
    setFilter(prev => prev === 'all' ? 'liked' : 'all');
  };

  return (
    <div className="app">
      <Header filter={filter} onFilterToggle={toggleFilter} />
      <Main
        drinks={drinks}
        likedDrinks={likedDrinks}
        filter={filter}
        onAddDrink={addDrink}
        onToggleLike={toggleLike}
        onDelete={deleteDrink}
      />
      <Footer />
    </div>
  );
}

export default App;