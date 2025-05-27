import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-maets-blue-light p-4 rounded">
      <div className="flex flex-col gap-4">
        <div className="p-2 bg-maets-blue rounded">
          <h3 className="text-accent">Minhas Plataformas</h3>
          <ul className="flex flex-col gap-2 p-2">
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>Steam</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>EA Play</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>Ubisoft Connect</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>Epic Games</span>
            </li>
            <li>
              <button className="w-full text-accent">+ Adicionar Plataforma</button>
            </li>
          </ul>
        </div>
        
        <div className="p-2 bg-maets-blue rounded">
          <h3 className="text-accent">Amigos Online</h3>
          <ul className="flex flex-col gap-2 p-2">
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded-full"></div>
              <span>Jogador1</span>
              <span className="text-maets-success">●</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded-full"></div>
              <span>Jogador2</span>
              <span className="text-maets-success">●</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded-full"></div>
              <span>Jogador3</span>
              <span className="text-maets-success">●</span>
            </li>
          </ul>
        </div>
        
        <div className="p-2 bg-maets-blue rounded">
          <h3 className="text-accent">Comunidades</h3>
          <ul className="flex flex-col gap-2 p-2">
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>RPG Lovers</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>FPS Brasil</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-6 h-6 bg-maets-dark rounded"></div>
              <span>Indie Games</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
