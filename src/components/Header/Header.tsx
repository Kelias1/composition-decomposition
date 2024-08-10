/**
 * Компонент Header: отвечает за верхний колонтитул.
 */

export const Header: React.FC = () => {
  return (

		<header className="header">
      <nav>
        <ul>
          <li>Видео</li>
          <li>Картинки</li>
          <li>Новости</li>
          <li>Карты</li>
          <li>Маркет</li>
          <li>Переводчик</li>
          <li>Эфир</li>
          <li>ещё</li>
        </ul>
      </nav>
    </header>
  );
};