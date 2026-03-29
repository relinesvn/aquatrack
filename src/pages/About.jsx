function About() {
  return (
    <main className="main">
      <div className="about">

        <section className="about__hero">
          <h1 className="about__title">💧 AquaTrack</h1>
          <p className="about__subtitle">Трекер водного балансу</p>
        </section>

        <section className="about__section">
          <h2 className="about__heading">Про застосунок</h2>
          <p className="about__text">
            AquaTrack — це простий та зручний застосунок для відстеження
            спожитої рідини протягом дня. Записуйте напої, стежте за
            статистикою та досягайте своєї денної норми гідратації.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__heading">Можливості</h2>
          <ul className="about__list">
            <li>💧 Додавання напоїв з параметрами (об'єм, цукор, калорії)</li>
            <li>📷 Завантаження фото напою</li>
            <li>❤️ Позначення улюблених напоїв</li>
            <li>📊 Статистика гідратації та прогрес-бари</li>
            <li>✅ Завдання дня для підтримки норми</li>
            <li>💾 Збереження даних між сесіями</li>
          </ul>
        </section>

        <section className="about__section">
          <h2 className="about__heading">Стек технологій</h2>
          <div className="about__tech">
            <span className="about__tech-badge">⚛️ React 19</span>
            <span className="about__tech-badge">⚡ Vite 8</span>
            <span className="about__tech-badge">🗺️ React Router 7</span>
            <span className="about__tech-badge">💾 localStorage</span>
            <span className="about__tech-badge">🎨 CSS Variables</span>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__heading">Автор</h2>
          <p className="about__text">
            Розроблено в рамках курсу<br />
            <strong>«Розробка інтерактивних мультимедійних додатків»</strong><br />
            Сумський державний університет, 2026
          </p>
        </section>

      </div>
    </main>
  );
}

export default About;