import { Weather } from "../Weather";
import Widget from "./Widget";
import WidgetItem from "./WidgetItem";

/**
 * Компонент Sidebar: отвечает за управление виджетами.
 */

const widgetsData = [
	{ title: 'Посещаемое', items: [
		{text: 'Недвижимость — о сталинках'},
		{text: 'Маркет — люстры и светильники'},
		{text: 'Авто.ру — привод 4х4 до 500 000'}
		]
	},

	{ title: 'Телепрограмма', items: [
		{text: '02:00 ТНТ.Best'},
		{text: '02:15 Джинглики'},
		{text: '02:25 Наедине со всеми'}
		]
	},
];

const Sidebar: React.FC = () => {
	return (
		<aside className="sidebar">
			<Weather />
			{widgetsData.map((widget, index) => (
				<Widget key={index} title={widget.title}>
					{widget.items.map((item, itemIndex) => (
						<WidgetItem key={itemIndex} {...item} />
					))}
				</Widget>
			))}
		</aside>
	);
};

export default Sidebar;