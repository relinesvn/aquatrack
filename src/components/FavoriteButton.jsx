import { useState } from 'react';

function FavoriteButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`favorite-btn ${liked ? 'liked' : ''}`}
      onClick={() => setLiked(prev => !prev)}
      title={liked ? 'Прибрати з улюблених' : 'Додати до улюблених'}
    >
      {liked ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoriteButton;