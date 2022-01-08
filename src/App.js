import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import Team from './pages/team/Team';
import FirstQuater from './pages/first-quater/FirstQuater';
import PlayerState from './context/player/playerState';
import TeamCreated from './pages/team-created/TeamCreated';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <PlayerState>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-team' element={<Team />} />
          <Route path='/first-quater' element={<FirstQuater />} />
          <Route path='/team-created' element={<TeamCreated />} />
        </Routes>
      </Router>
    </PlayerState>
  );
}

export default App;
