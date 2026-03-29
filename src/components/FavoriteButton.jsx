function FavoriteButton({ liked, onToggle }) {
  return (
    <button
      className={`favorite-btn ${liked ? 'liked' : ''}`}
      onClick={onToggle}
      title={liked ? 'Прибрати з улюблених' : 'Додати до улюблених'}
    >
      {liked ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoriteButton;