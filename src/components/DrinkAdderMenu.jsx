import { useState, useEffect } from 'react';

const CATEGORIES = ['Вода', 'Чай', 'Кава', 'Сік', 'Смузі', 'Інше'];

const emptyForm = {
  name: '', category: 'Вода',
  volume: '', sugar: '', calories: '', photo: null,
};

function DrinkAdderMenu({ onAddDrink, onUpdateDrink, editDrink, onEditDrink }) {
  const [form, setForm]   = useState(emptyForm);
  const [error, setError] = useState('');

  // Коли приходить напій для редагування — заповнюємо форму
  useEffect(() => {
    if (editDrink) {
      setForm({
        name:     editDrink.name     || '',
        category: editDrink.category || 'Вода',
        volume:   editDrink.volume   || '',
        sugar:    editDrink.sugar    || '',
        calories: editDrink.calories || '',
        photo:    editDrink.photo    || null,
      });
      setError('');
    } else {
      setForm(emptyForm);
    }
  }, [editDrink]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === 'name') setError('');
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      setForm(prev => ({ ...prev, photo: evt.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Назва напою не може бути порожньою');
      return;
    }

    const drink = {
      ...form,
      volume:   Number(form.volume)   || 250,
      sugar:    Number(form.sugar)    || 0,
      calories: Number(form.calories) || 0,
    };

    if (editDrink) {
      onUpdateDrink({ ...drink, id: editDrink.id });
    } else {
      onAddDrink({ ...drink, id: Date.now() });
    }

    setForm(emptyForm);
  };

  const handleCancel = () => {
    onEditDrink(null);
    setForm(emptyForm);
    setError('');
  };

  return (
    <div className={`drink-adder ${editDrink ? 'drink-adder--editing' : ''}`}>
      <h2 className="drink-adder__title">
        {editDrink ? '✏️ Редагувати напій' : 'Додати напій'}
      </h2>

      <form className="drink-adder__form" onSubmit={handleSubmit}>

        <div className="drink-adder__field">
          <input
            className={`drink-adder__input ${error ? 'input--error' : ''}`}
            type="text"
            name="name"
            placeholder="Назва напою *"
            value={form.name}
            onChange={handleChange}
          />
          {error && <span className="drink-adder__error">{error}</span>}
        </div>

        <select
          className="drink-adder__input drink-adder__select"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className="drink-adder__row">
          <input
            className="drink-adder__input"
            type="number" name="volume"
            placeholder="Об'єм (мл)" min="1"
            value={form.volume} onChange={handleChange}
          />
          <input
            className="drink-adder__input"
            type="number" name="sugar"
            placeholder="Цукор (г)" min="0"
            value={form.sugar} onChange={handleChange}
          />
          <input
            className="drink-adder__input"
            type="number" name="calories"
            placeholder="Калорії" min="0"
            value={form.calories} onChange={handleChange}
          />
        </div>

        <div className="drink-adder__photo-wrap">
          <label className="drink-adder__photo-label">
            📷 {form.photo ? 'Фото вибрано ✅' : 'Додати фото'}
            <input
              type="file" accept="image/*"
              className="drink-adder__photo-input"
              onChange={handlePhoto}
            />
          </label>
          {form.photo && (
            <img className="drink-adder__preview" src={form.photo} alt="preview" />
          )}
        </div>

        <div className="drink-adder__buttons">
          <button className="drink-adder__btn" type="submit">
            {editDrink ? '💾 Зберегти' : '➕ Додати напій'}
          </button>
          {editDrink && (
            <button
              className="drink-adder__btn drink-adder__btn--cancel"
              type="button"
              onClick={handleCancel}
            >
              Скасувати
            </button>
          )}
        </div>

      </form>
    </div>
  );
}

export default DrinkAdderMenu;