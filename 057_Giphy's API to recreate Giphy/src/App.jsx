import { useGiphy } from './hooks/useGiphy';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GifGrid from './components/GifGrid';
import './styles/App.css';

function App() {
  const { gifs, loading, error, fetchGifs } = useGiphy();

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={fetchGifs} loading={loading} />
      <GifGrid gifs={gifs} loading={loading} error={error} />
    </div>
  );
}

export default App;