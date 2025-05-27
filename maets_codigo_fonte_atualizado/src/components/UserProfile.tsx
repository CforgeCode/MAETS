import React from 'react';
import { useState } from 'react';

interface ProfileProps {
  username?: string;
}

const UserProfile: React.FC<ProfileProps> = ({ username = "Usuário" }) => {
  const [activeTab, setActiveTab] = useState<'perfil' | 'conquistas' | 'amigos'>('perfil');
  
  return (
    <div className="bg-maets-blue p-4 rounded">
      <div className="flex gap-4 mb-4">
        <div className="w-24 h-24 bg-maets-dark rounded-full flex items-center justify-center overflow-hidden">
          <img src="/images/default-avatar.png" alt="Avatar do usuário" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-xl">{username}</h2>
          <p className="text-maets">Online</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-maets-blue-light">Editar Perfil</button>
            <button className="bg-maets-blue-light">Adicionar Amigo</button>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mb-4 border-b border-maets-blue-light pb-2">
        <button 
          className={`${activeTab === 'perfil' ? 'bg-maets-accent' : 'bg-maets-blue-light'}`}
          onClick={() => setActiveTab('perfil')}
        >
          Perfil
        </button>
        <button 
          className={`${activeTab === 'conquistas' ? 'bg-maets-accent' : 'bg-maets-blue-light'}`}
          onClick={() => setActiveTab('conquistas')}
        >
          Conquistas
        </button>
        <button 
          className={`${activeTab === 'amigos' ? 'bg-maets-accent' : 'bg-maets-blue-light'}`}
          onClick={() => setActiveTab('amigos')}
        >
          Amigos
        </button>
      </div>
      
      {activeTab === 'perfil' && (
        <div className="bg-maets-blue-light p-4 rounded">
          <h3 className="text-accent mb-2">Informações do Perfil</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-maets mb-1">Membro desde:</p>
              <p className="text-white">Maio de 2025</p>
            </div>
            <div>
              <p className="text-maets mb-1">Jogos na biblioteca:</p>
              <p className="text-white">42</p>
            </div>
            <div>
              <p className="text-maets mb-1">Plataformas conectadas:</p>
              <p className="text-white">Steam, EA Play</p>
            </div>
            <div>
              <p className="text-maets mb-1">Total de horas jogadas:</p>
              <p className="text-white">872</p>
            </div>
          </div>
          
          <h3 className="text-accent mt-4 mb-2">Personalização</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-maets mb-1">Tema:</p>
              <select className="bg-maets-dark text-white p-2 rounded w-full">
                <option>Padrão MAETS</option>
                <option>Escuro</option>
                <option>Claro</option>
                <option>Retro</option>
              </select>
            </div>
            <div>
              <p className="text-maets mb-1">Avatar:</p>
              <button className="bg-maets-blue-light">Alterar Avatar</button>
            </div>
            <div>
              <p className="text-maets mb-1">Banner:</p>
              <button className="bg-maets-blue-light">Alterar Banner</button>
            </div>
            <div>
              <p className="text-maets mb-1">Status:</p>
              <select className="bg-maets-dark text-white p-2 rounded w-full">
                <option>Online</option>
                <option>Ausente</option>
                <option>Ocupado</option>
                <option>Invisível</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'conquistas' && (
        <div className="bg-maets-blue-light p-4 rounded">
          <h3 className="text-accent mb-2">Conquistas Recentes</h3>
          <div className="flex flex-col gap-2">
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full flex items-center justify-center">
                <span className="text-accent">🏆</span>
              </div>
              <div>
                <p className="text-white">Mestre das Armas</p>
                <p className="text-maets text-sm">Counter-Strike 2 • Desbloqueada ontem</p>
              </div>
            </div>
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full flex items-center justify-center">
                <span className="text-accent">🏆</span>
              </div>
              <div>
                <p className="text-white">Explorador Incansável</p>
                <p className="text-maets text-sm">Red Dead Redemption 2 • Desbloqueada há 3 dias</p>
              </div>
            </div>
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full flex items-center justify-center">
                <span className="text-accent">🏆</span>
              </div>
              <div>
                <p className="text-white">Campeão da Liga</p>
                <p className="text-maets text-sm">FIFA 23 • Desbloqueada há 1 semana</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'amigos' && (
        <div className="bg-maets-blue-light p-4 rounded">
          <h3 className="text-accent mb-2">Lista de Amigos</h3>
          <div className="flex flex-col gap-2">
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full overflow-hidden">
                <img src="/images/default-avatar.png" alt="Avatar do amigo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <p className="text-white">Jogador1</p>
                <p className="text-maets text-sm">Jogando Counter-Strike 2</p>
              </div>
              <div className="text-maets-success">●</div>
            </div>
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full overflow-hidden">
                <img src="/images/default-avatar.png" alt="Avatar do amigo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <p className="text-white">Jogador2</p>
                <p className="text-maets text-sm">Jogando FIFA 23</p>
              </div>
              <div className="text-maets-success">●</div>
            </div>
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full overflow-hidden">
                <img src="/images/default-avatar.png" alt="Avatar do amigo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <p className="text-white">Jogador3</p>
                <p className="text-maets text-sm">Online</p>
              </div>
              <div className="text-maets-success">●</div>
            </div>
            <div className="bg-maets-dark p-2 rounded flex items-center gap-2">
              <div className="w-10 h-10 bg-maets-blue-light rounded-full overflow-hidden">
                <img src="/images/default-avatar.png" alt="Avatar do amigo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <p className="text-white">Jogador4</p>
                <p className="text-maets text-sm">Offline • Visto por último: ontem</p>
              </div>
              <div className="text-maets">○</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
