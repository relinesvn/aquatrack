import { NavLink } from 'react-router-dom';

function Header({ filter, onFilterToggle }) {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          💧 AquaTrack
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}
          >
            🏠 Головна
          </NavLink>
          <NavLink
            to="/drinks"
            className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}
          >
            🥤 Напої
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}
          >
            📊 Статистика
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}
          >
            ℹ️ Про нас
          </NavLink>
        </nav>

        <button
          className={`filter-btn ${filter === 'liked' ? 'active' : ''}`}
          onClick={onFilterToggle}
        >
          {filter === 'liked' ? '❤️ Усі напої' : '🤍 Улюблені'}
        </button>
      </div>
    </header>
  );
}

export default Header;