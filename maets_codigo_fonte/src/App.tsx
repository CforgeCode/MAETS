import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameLibrary from './components/GameLibrary';
import SocialHub from './components/SocialHub';
import PlatformLogin from './components/PlatformLogin';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <PlatformLogin />
              <GameLibrary />
              <SocialHub />
              <UserProfile />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-steam-dark p-4 mt-4">
        <div className="container text-steam text-center">
          <p>© 2025 MAETS - Todos os direitos reservados</p>
          <p>Uma plataforma unificada para gamers</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
