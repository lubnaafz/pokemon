import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/:idPokemon" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
