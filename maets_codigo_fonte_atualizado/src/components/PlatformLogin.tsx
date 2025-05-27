import React from 'react';

const PlatformLogin: React.FC = () => {
  return (
    <div className="bg-maets-blue p-4 rounded">
      <h2 className="text-white mb-4">Conectar Plataformas</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-maets-blue-light p-4 rounded flex flex-col items-center">
          <div className="w-16 h-16 bg-maets-dark rounded-full mb-2 flex items-center justify-center">
            <span className="text-accent">Steam</span>
          </div>
          <h3 className="text-white mb-2">Steam</h3>
          <button className="bg-maets-accent">Conectar</button>
        </div>
        
        <div className="bg-maets-blue-light p-4 rounded flex flex-col items-center">
          <div className="w-16 h-16 bg-maets-dark rounded-full mb-2 flex items-center justify-center">
            <span className="text-accent">EA</span>
          </div>
          <h3 className="text-white mb-2">EA Play</h3>
          <button className="bg-maets-accent">Conectar</button>
        </div>
        
        <div className="bg-maets-blue-light p-4 rounded flex flex-col items-center">
          <div className="w-16 h-16 bg-maets-dark rounded-full mb-2 flex items-center justify-center">
            <span className="text-accent">Ubisoft</span>
          </div>
          <h3 className="text-white mb-2">Ubisoft Connect</h3>
          <button className="bg-maets-accent">Conectar</button>
        </div>
        
        <div className="bg-maets-blue-light p-4 rounded flex flex-col items-center">
          <div className="w-16 h-16 bg-maets-dark rounded-full mb-2 flex items-center justify-center">
            <span className="text-accent">Epic</span>
          </div>
          <h3 className="text-white mb-2">Epic Games</h3>
          <button className="bg-maets-accent">Conectar</button>
        </div>
        
        <div className="bg-maets-blue-light p-4 rounded flex flex-col items-center">
          <div className="w-16 h-16 bg-maets-dark rounded-full mb-2 flex items-center justify-center">
            <span className="text-accent">GOG</span>
          </div>
          <h3 className="text-white mb-2">GOG</h3>
          <button className="bg-maets-accent">Conectar</button>
        </div>
        
        <div className="bg-maets-blue-light p-4 rounded flex flex-col items-center">
          <div className="w-16 h-16 bg-maets-dark rounded-full mb-2 flex items-center justify-center">
            <span className="text-accent">+</span>
          </div>
          <h3 className="text-white mb-2">Adicionar Outra</h3>
          <button className="bg-maets-blue-light">Explorar</button>
        </div>
      </div>
    </div>
  );
};

export default PlatformLogin;
