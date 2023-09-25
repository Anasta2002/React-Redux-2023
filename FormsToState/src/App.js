import './App.css';
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage/index.jsx';
import ConfigurationsPage from './pages/ConfigurationsPage/index.jsx';
import TeamsPage from './pages/TeamsPage/index.jsx';
import { useState } from 'react';
import { Context } from './context';

function App() {
  const [teams, setTeams] = useState([]);
  const add_team = new_team => setTeams([...teams, new_team]);

  const [players, setPlayers] = useState([]);
  const add_player = new_player => setPlayers([...players, new_player]);

  const delete_player = id => {
    setPlayers(players.filter(el => el.id !== id))
  };

  return (
    <Context.Provider value={{ add_team, teams, players, add_player, delete_player }}>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/configuratios_page' element={<ConfigurationsPage />} />
        <Route path='/teams_page' element={<TeamsPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
