import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home   from './pages/Home';
import Drinks from './pages/Drinks';
import Stats  from './pages/Stats';
import About  from './pages/About';
import './App.css';

const initialDrinks = [
  { id: 1, name: 'Чиста вода',       category: 'Вода', volume: 250, sugar: 0,  calories: 0   },
  { id: 2, name: 'Капучино',         category: 'Кава', volume: 300, sugar: 10, calories: 120 },
  { id: 3, name: 'Зелений чай',      category: 'Чай',  volume: 200, sugar: 0,  calories: 2   },
  { id: 4, name: 'Апельсиновий сік', category: 'Сік',  volume: 250, sugar: 24, calories: 112 },
];

function App() {
  const [drinks, setDrinks] = useState(() => {
    try {
      const saved = localStorage.getItem('aquatrack_drinks');
      return saved ? JSON.parse(saved) : initialDrinks;
    } catch { return initialDrinks; }
  });

  const [likedDrinks, setLikedDrinks] = useState(() => {
    try {
      const saved = localStorage.getItem('aquatrack_liked');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });

  const [filter, setFilter]       = useState('all');
  const [editDrink, setEditDrink] = useState(null);

  useEffect(() => {
    localStorage.setItem('aquatrack_drinks', JSON.stringify(drinks));
  }, [drinks]);

  useEffect(() => {
    localStorage.setItem('aquatrack_liked', JSON.stringify([...likedDrinks]));
  }, [likedDrinks]);

  const addDrink = (drink) => {
    setDrinks(prev => [...prev, drink]);
  };

  const updateDrink = (updated) => {
    setDrinks(prev => prev.map(d => d.id === updated.id ? updated : d));
    setEditDrink(null);
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
    <BrowserRouter>
      <div className="app">
        <Header filter={filter} onFilterToggle={toggleFilter} />

        <Routes>
          <Route path="/" element={<Home drinks={drinks} />} />

          <Route path="/drinks" element={
            <Drinks
              drinks={drinks}
              likedDrinks={likedDrinks}
              filter={filter}
              onAddDrink={addDrink}
              onUpdateDrink={updateDrink}
              onToggleLike={toggleLike}
              onDelete={deleteDrink}
              editDrink={editDrink}
              onEditDrink={setEditDrink}
            />
          } />

          <Route path="/stats"  element={<Stats drinks={drinks} />} />
          <Route path="/about"  element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;