import React from 'react';
import logo from '../assets/maets-logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-maets-dark p-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="MAETS Logo" className="h-12" />
          <nav>
            <ul className="flex gap-4">
              <li><a href="#loja" className="text-maets hover:text-accent">LOJA</a></li>
              <li><a href="#biblioteca" className="text-maets hover:text-accent">BIBLIOTECA</a></li>
              <li><a href="#comunidade" className="text-maets hover:text-accent">COMUNIDADE</a></li>
              <li><a href="#perfil" className="text-maets hover:text-accent">PERFIL</a></li>
              <li><a href="#chat" className="text-maets hover:text-accent">CHAT</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-maets-blue-light hover:bg-maets-accent">Instalar</button>
          <div className="text-maets flex items-center gap-2">
            <img src="/images/default-avatar.png" alt="Avatar do usuário" className="w-8 h-8 rounded-full" />
            <span>Olá, Usuário</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
