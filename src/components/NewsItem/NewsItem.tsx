import { NewsItemProps } from '../../interface';

/**
 * Компонент NewsItem: отвечает за отдельную новость.
 */

export const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div className="news__item">
      <span>{icon}</span>
      <a href={link}>{text}</a>
    </div>
  );
};