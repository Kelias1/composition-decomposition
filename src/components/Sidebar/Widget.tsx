import React, { ReactNode } from 'react';
/**
 * Компонент Widget: отвечает за панель с дополнительной информацией.
 */
interface WidgetProps {
  title: string;
  children: ReactNode[];
}

const Widget: React.FC<WidgetProps> = ({ title, children }) => {
	return (
		<div className="widget">
			<h4>{title}</h4>
			{children}
		</div>
		);
}

export default Widget;