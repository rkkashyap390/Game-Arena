import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

import Snake from './components/Snake/Snake.jsx';
import Tictactoe from './components/Tictactoe/Tictactoe.jsx';
import Mazegame from './components/Mazegame/Mazegame.jsx';
import Shootbird from './components/Shootbird/Shootbird.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Sidebar/>
          <Routes>
            <Route path='/snake' Component={Snake} />
            <Route path='/tic-tac-toe' Component={Tictactoe} />
            <Route path='/mazegame' Component={Mazegame} />
            <Route path='/shootbird' Component={Shootbird} />
          </Routes>
        {/* <Gamearea /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
