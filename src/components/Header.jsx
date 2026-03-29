function Header({ filter, onFilterToggle }) {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">💧 AquaTrack</span>
        <div className="header__right">
          <span className="header__subtitle">Трекер водного балансу</span>
          <button
            className={`filter-btn ${filter === 'liked' ? 'active' : ''}`}
            onClick={onFilterToggle}
          >
            {filter === 'liked' ? '❤️ Усі напої' : '🤍 Улюблені'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;