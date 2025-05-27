import React from 'react';

const SocialHub: React.FC = () => {
  return (
    <div className="bg-steam-blue p-4 rounded">
      <h2 className="text-white mb-4">Hub Social</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-steam-blue-light p-4 rounded">
          <h3 className="text-accent mb-2">Chat</h3>
          <div className="bg-steam-dark p-2 rounded mb-4 h-40 overflow-y-auto">
            <div className="mb-2">
              <span className="text-accent">Jogador1: </span>
              <span className="text-steam">Alguém vai jogar CS2 hoje?</span>
            </div>
            <div className="mb-2">
              <span className="text-accent">Jogador2: </span>
              <span className="text-steam">Estou dentro! Depois das 20h.</span>
            </div>
            <div className="mb-2">
              <span className="text-accent">Jogador3: </span>
              <span className="text-steam">Vou jogar Fortnite agora, mais tarde entro no CS.</span>
            </div>
            <div className="mb-2">
              <span className="text-accent">Você: </span>
              <span className="text-steam">Contem comigo para CS2!</span>
            </div>
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Digite sua mensagem..." className="bg-steam-dark text-steam p-2 rounded flex-grow" />
            <button className="bg-steam-accent">Enviar</button>
          </div>
        </div>
        
        <div className="bg-steam-blue-light p-4 rounded">
          <h3 className="text-accent mb-2">Atividades Recentes</h3>
          <div className="flex flex-col gap-2">
            <div className="bg-steam-dark p-2 rounded">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-steam-blue-light rounded-full"></div>
                <div>
                  <span className="text-accent">Jogador1 </span>
                  <span className="text-steam">começou a jogar </span>
                  <span className="text-white">Counter-Strike 2</span>
                </div>
              </div>
            </div>
            <div className="bg-steam-dark p-2 rounded">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-steam-blue-light rounded-full"></div>
                <div>
                  <span className="text-accent">Jogador2 </span>
                  <span className="text-steam">desbloqueou a conquista </span>
                  <span className="text-white">Mestre das Armas</span>
                  <span className="text-steam"> em Counter-Strike 2</span>
                </div>
              </div>
            </div>
            <div className="bg-steam-dark p-2 rounded">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-steam-blue-light rounded-full"></div>
                <div>
                  <span className="text-accent">Jogador3 </span>
                  <span className="text-steam">adicionou </span>
                  <span className="text-white">Cyberpunk 2077</span>
                  <span className="text-steam"> à lista de desejos</span>
                </div>
              </div>
            </div>
            <div className="bg-steam-dark p-2 rounded">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-steam-blue-light rounded-full"></div>
                <div>
                  <span className="text-accent">Comunidade RPG Lovers </span>
                  <span className="text-steam">agendou um evento: </span>
                  <span className="text-white">Maratona The Witcher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;
