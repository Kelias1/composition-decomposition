import advertising from '../../assets/advertising.jpg';

/**
 * Компонент Advertisement: отвечает за рекламу.
 */

export const Advertisement: React.FC = () => {
  return (
    <div className="advertisement">
			<img src={advertising} alt=""/>
    </div>
  );
};