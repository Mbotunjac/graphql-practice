import './App.css';
import {Routes, Route} from 'react-router-dom';
import CharacterListPage from './pages/CharacterListPage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharacterListPage />}/>
        <Route path='/:id' element={<CharacterPage />}/>
      </Routes>
    </div>
  );
}

export default App;
