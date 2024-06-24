import React from 'react';
import PropTypes from 'prop-types';

const CardTrilhas = ({
  nome,
  cidade,
  estado,
  duracao,
  trajeto,
  dificuldade,
  tipo,
  criador,
  imagem
}) => {
  return (
    <div className="card-trilhas">
      <h2>{nome}</h2>
      <p>{cidade}, {estado}</p>
      <p>Duração: {duracao}</p>
      <p>Trajeto: {trajeto}</p>
      <p>Dificuldade: {dificuldade}</p>
      <p>Tipo: {tipo}</p>
      <p>Criado por: {criador}</p>
      <img src={imagem} alt={`Imagem da trilha ${nome}`} />
    </div>
  );
};

CardTrilhas.propTypes = {
  nome: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  duracao: PropTypes.string.isRequired,
  trajeto: PropTypes.string.isRequired,
  dificuldade: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  criador: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired
};

export default CardTrilhas;
