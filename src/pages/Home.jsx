import { Link } from 'react-router-dom';

function Home({ drinks }) {
  const totalVolume = drinks.reduce((sum, d) => sum + (d.volume || 0), 0);
  const goal        = 2000;
  const percent     = Math.min(Math.round((totalVolume / goal) * 100), 100);

  return (
    <main className="main">
      <div className="home">

        <section className="home__hero">
          <h1 className="home__title">💧 AquaTrack</h1>
          <p className="home__subtitle">
            Стежте за своїм водним балансом щодня.<br />
            Здорова гідратація — здорове життя!
          </p>
          <Link to="/drinks" className="home__cta">
            ➕ Додати напій
          </Link>
        </section>

        <section className="home__stats">
          <div className="home__stat-card">
            <span className="home__stat-icon">💧</span>
            <span className="home__stat-value">{totalVolume} мл</span>
            <span className="home__stat-label">Випито сьогодні</span>
          </div>
          <div className="home__stat-card">
            <span className="home__stat-icon">🎯</span>
            <span className="home__stat-value">{percent}%</span>
            <span className="home__stat-label">Від денної норми</span>
          </div>
          <div className="home__stat-card">
            <span className="home__stat-icon">🥤</span>
            <span className="home__stat-value">{drinks.length}</span>
            <span className="home__stat-label">Записів сьогодні</span>
          </div>
        </section>

        <section className="home__progress-section">
          <div className="home__progress-label">
            <span>Денна норма: {goal} мл</span>
            <span>{totalVolume} / {goal} мл</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar__fill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </section>

        <section className="home__links">
          <Link to="/drinks" className="home__link-card">
            <span>🥤</span>
            <span>Мої напої</span>
          </Link>
          <Link to="/stats" className="home__link-card">
            <span>📊</span>
            <span>Статистика</span>
          </Link>
          <Link to="/about" className="home__link-card">
            <span>ℹ️</span>
            <span>Про нас</span>
          </Link>
        </section>

      </div>
    </main>
  );
}

export default Home;