import React from 'react';
import { NewsItem } from '../NewsItem';

/**
 * Компонент NewsList: отвечает за список новостей.
 */

export const NewsList: React.FC = () => {
  const newsItems = [
    { icon: '📰', text: 'Первая новость', link: '#' },
    { icon: '📰', text: 'Вторая новость', link: '#' },
    { icon: '📰', text: 'Третья новость', link: '#' },
    { icon: '📰', text: 'Четвертая новость', link: '#' },
  ];

  return (
    <div className="news__list">
			<h4>Сейчас в СМИ</h4>
      {newsItems.map((item, index) => (
        <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};