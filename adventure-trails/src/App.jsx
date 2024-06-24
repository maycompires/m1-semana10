// App.jsx
import React from 'react';
import CardTrilhas from './components/CardTrilhas';

function App() {
  return (
    <div className="App">
      <CardTrilhas
        nome="Trilha do Gravatá"
        cidade="Florianópolis"
        estado="SC"
        duracao="1 horas"
        trajeto="Circular"
        dificuldade="Moderada"
        tipo="Caminhada"
        criador="Maycom Pires"
        imagem={"../images/trilha-do-gravata.jpg"}
      />
    </div>
  );
}

export default App;
