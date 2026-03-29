import { useState } from 'react';

const DAILY_GOAL = 2000;

const INITIAL_TASKS = [
  { id: 1, text: 'Випити склянку води вранці',       done: false },
  { id: 2, text: 'Випити 500 мл до обіду',           done: false },
  { id: 3, text: 'Уникати солодких напоїв',           done: false },
  { id: 4, text: 'Випити 500 мл після тренування',   done: false },
  { id: 5, text: 'Досягти денної норми 2000 мл',     done: false },
];

function Stats({ drinks }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  };

  // Підрахунок статистики
  const totalVolume   = drinks.reduce((sum, d) => sum + (d.volume   || 0), 0);
  const totalSugar    = drinks.reduce((sum, d) => sum + (d.sugar    || 0), 0);
  const totalCalories = drinks.reduce((sum, d) => sum + (d.calories || 0), 0);

  const goalPercent = Math.min(Math.round((totalVolume / DAILY_GOAL) * 100), 100);

  // Статистика по категоріях
  const byCategory = drinks.reduce((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + (d.volume || 0);
    return acc;
  }, {});

  const categoryColors = {
    'Вода': '#2196f3', 'Чай': '#4caf50', 'Кава': '#795548',
    'Сік':  '#ff9800', 'Смузі': '#9c27b0', 'Інше': '#607d8b',
  };

  return (
    <main className="main">
      <div className="stats">

        {/* Загальна статистика */}
        <section className="stats__section">
          <h2 className="stats__title">📊 Статистика за сьогодні</h2>
          <div className="stats__cards">
            <div className="stats__card stats__card--blue">
              <span className="stats__card-icon">💧</span>
              <span className="stats__card-value">{totalVolume}</span>
              <span className="stats__card-label">мл рідини</span>
            </div>
            <div className="stats__card stats__card--orange">
              <span className="stats__card-icon">🍬</span>
              <span className="stats__card-value">{totalSugar}</span>
              <span className="stats__card-label">г цукру</span>
            </div>
            <div className="stats__card stats__card--red">
              <span className="stats__card-icon">🔥</span>
              <span className="stats__card-value">{totalCalories}</span>
              <span className="stats__card-label">ккал</span>
            </div>
          </div>
        </section>

        {/* Прогрес денної норми */}
        <section className="stats__section">
          <h2 className="stats__title">🎯 Денна норма ({DAILY_GOAL} мл)</h2>
          <div className="stats__goal">
            <div className="progress-bar">
              <div
                className="progress-bar__fill"
                style={{ width: `${goalPercent}%` }}
              />
            </div>
            <span className="stats__goal-text">
              {totalVolume} / {DAILY_GOAL} мл — {goalPercent}%
            </span>
          </div>
        </section>

        {/* Прогрес по категоріях */}
        {Object.keys(byCategory).length > 0 && (
          <section className="stats__section">
            <h2 className="stats__title">📂 По категоріях</h2>
            <div className="stats__categories">
              {Object.entries(byCategory).map(([cat, vol]) => (
                <div key={cat} className="stats__cat-row">
                  <span className="stats__cat-name">{cat}</span>
                  <div className="progress-bar progress-bar--sm">
                    <div
                      className="progress-bar__fill"
                      style={{
                        width: `${Math.min((vol / totalVolume) * 100, 100)}%`,
                        background: categoryColors[cat] || '#607d8b',
                      }}
                    />
                  </div>
                  <span className="stats__cat-vol">{vol} мл</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Завдання дня */}
        <section className="stats__section">
          <h2 className="stats__title">✅ Завдання дня</h2>
          <ul className="tasks">
            {tasks.map(task => (
              <li
                key={task.id}
                className={`task ${task.done ? 'task--done' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                <span className="task__checkbox">
                  {task.done ? '☑️' : '⬜'}
                </span>
                <span className="task__text">{task.text}</span>
              </li>
            ))}
          </ul>
          <p className="tasks__summary">
            Виконано: {tasks.filter(t => t.done).length} / {tasks.length}
          </p>
        </section>

      </div>
    </main>
  );
}

export default Stats;