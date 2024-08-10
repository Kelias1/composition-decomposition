/**
 * Компонент Weather: отвечает за информацию о погоде.
 */

export const Weather: React.FC = () => {
  return (
    <div className="weather">
			<h4>Погода</h4>
      <div className="sun">🌦️</div>
      <div className="temperature">+22°</div>
      <div className="weather-forecast">Утром +17, днём +22</div>
    </div>
  );
};