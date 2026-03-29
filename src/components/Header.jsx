function Header({ filter, onFilterToggle, page, onPageChange }) {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">💧 AquaTrack</span>

        <nav className="header__nav">
          <button
            className={`nav-btn ${page === 'drinks' ? 'nav-btn--active' : ''}`}
            onClick={() => onPageChange('drinks')}
          >
            🥤 Напої
          </button>
          <button
            className={`nav-btn ${page === 'stats' ? 'nav-btn--active' : ''}`}
            onClick={() => onPageChange('stats')}
          >
            📊 Статистика
          </button>
        </nav>

        <div className="header__right">
          {page === 'drinks' && (
            <button
              className={`filter-btn ${filter === 'liked' ? 'active' : ''}`}
              onClick={onFilterToggle}
            >
              {filter === 'liked' ? '❤️ Усі напої' : '🤍 Улюблені'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;