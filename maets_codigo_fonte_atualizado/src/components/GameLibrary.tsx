import React from 'react';
import { useState } from 'react';

interface Game {
  id: number;
  title: string;
  platform: string;
  image: string;
  lastPlayed?: string;
  hoursPlayed?: number;
}

const GameLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'recent'>('all');
  
  const games: Game[] = [
    { id: 1, title: 'Cyberpunk 2077', platform: 'Steam', image: '/images/game-placeholder.jpg', lastPlayed: 'Hoje', hoursPlayed: 42 },
    { id: 2, title: 'FIFA 23', platform: 'EA Play', image: '/images/game-placeholder.jpg', lastPlayed: 'Ontem', hoursPlayed: 28 },
    { id: 3, title: 'Assassin\'s Creed Valhalla', platform: 'Ubisoft Connect', image: '/images/game-placeholder.jpg', lastPlayed: '3 dias atrás', hoursPlayed: 56 },
    { id: 4, title: 'Fortnite', platform: 'Epic Games', image: '/images/game-placeholder.jpg', lastPlayed: 'Semana passada', hoursPlayed: 120 },
    { id: 5, title: 'Counter-Strike 2', platform: 'Steam', image: '/images/game-placeholder.jpg', lastPlayed: 'Hoje', hoursPlayed: 340 },
    { id: 6, title: 'The Witcher 3', platform: 'Steam', image: '/images/game-placeholder.jpg', lastPlayed: '2 semanas atrás', hoursPlayed: 98 },
    { id: 7, title: 'Apex Legends', platform: 'EA Play', image: '/images/game-placeholder.jpg', lastPlayed: 'Ontem', hoursPlayed: 76 },
    { id: 8, title: 'Red Dead Redemption 2', platform: 'Epic Games', image: '/images/game-placeholder.jpg', lastPlayed: '1 mês atrás', hoursPlayed: 112 },
  ];
  
  const recentGames = games.filter((game, index) => index < 4);
  
  return (
    <div className="bg-maets-blue p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white">Minha Biblioteca</h2>
        <div className="flex gap-2">
          <button 
            className={`${activeTab === 'all' ? 'bg-maets-accent' : 'bg-maets-blue-light'}`}
            onClick={() => setActiveTab('all')}
          >
            Todos os Jogos
          </button>
          <button 
            className={`${activeTab === 'recent' ? 'bg-maets-accent' : 'bg-maets-blue-light'}`}
            onClick={() => setActiveTab('recent')}
          >
            Jogados Recentemente
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {(activeTab === 'all' ? games : recentGames).map(game => (
          <div key={game.id} className="bg-maets-blue-light rounded overflow-hidden card">
            <div className="h-40 bg-maets-dark flex items-center justify-center">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-white">{game.title}</h3>
              <div className="flex justify-between text-maets">
                <span>{game.platform}</span>
                <span>{game.hoursPlayed}h</span>
              </div>
              <div className="text-maets text-sm">
                Jogado por último: {game.lastPlayed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLibrary;
