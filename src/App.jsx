import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div className="contador-container">
      <div className="contador-card">
        <p className="contador-subtitulo">Contador de Cliques</p>
        <h1 className="contador-valor">{count}</h1>
        <button className="contador-botao" onClick={incrementarContador}>
          Clique aqui
        </button>
      </div>
    </div>
  );
};

export default Contador;