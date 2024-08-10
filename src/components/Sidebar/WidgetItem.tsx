import React from 'react';


interface WidgetItemProps {
  text: string;
}

const WidgetItem: React.FC<WidgetItemProps> = ({ text }) => {
  return (
		<ul className='nav_widget'>
			<li>{text}</li>
		</ul>
  );
};

export default WidgetItem;