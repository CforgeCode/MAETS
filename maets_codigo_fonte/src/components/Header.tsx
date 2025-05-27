import React from 'react';
import logo from '../assets/maets-logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-steam-dark p-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="MAETS Logo" className="h-12" />
          <nav>
            <ul className="flex gap-4">
              <li><a href="#loja" className="text-steam hover:text-accent">LOJA</a></li>
              <li><a href="#biblioteca" className="text-steam hover:text-accent">BIBLIOTECA</a></li>
              <li><a href="#comunidade" className="text-steam hover:text-accent">COMUNIDADE</a></li>
              <li><a href="#perfil" className="text-steam hover:text-accent">PERFIL</a></li>
              <li><a href="#chat" className="text-steam hover:text-accent">CHAT</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-steam-blue-light hover:bg-steam-accent">Instalar</button>
          <div className="text-steam flex items-center gap-2">
            <img src="/images/default-avatar.png" alt="Avatar do usuário" className="w-8 h-8 rounded-full" />
            <span>Olá, Usuário</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
