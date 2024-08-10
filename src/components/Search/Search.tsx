/**
 * Компонент Search: отвечает за часть с логотипом, навигацией и строкой поиска.
 */

export const Search: React.FC = () => {
  return (
		<div className="search-container">
		<div className="logo">
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yandex_official_logo.svg/100px-Yandex_official_logo.svg.png'></img>
			</div>

			<div className="search__bar">
        <input type="text" placeholder="Поиск" />
        <button className="btn">Найти</button>
      </div>
		</div>
  );
};