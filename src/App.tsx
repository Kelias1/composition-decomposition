import { Header } from './components/Header';
import { NewsList } from './components/NewsList';
import { Search } from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import { Advertisement } from './components/Advertisement';
import './App.css';

/**
 * App: Основной компонент приложения
 */

const App: React.FC = () => {
  return (
    <div className="App">

			<NewsList />
      <Header />
			<Search />
			<Advertisement />
			<Sidebar />

    </div>
  );
};

export default App;