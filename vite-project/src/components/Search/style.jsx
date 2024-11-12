// SearchBarStyles.jsx
import styled from 'styled-components';
import Colors from "../../Utils/Colors";

export const Form = styled.form`
  width: 50%;
  position: absolute;
  top: 60px;
  right: 300px;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 70%; /* Aumenta a largura em telas menores */
    right: 50px; /* Ajusta a posição */
  }

  @media (max-width: 768px) {
    width: 80%; /* Ajusta ainda mais a largura */
    right: 0; /* Centraliza o formulário */
    left: 0;
    margin: 0 auto; /* Centraliza o formulário */
  }

  @media (max-width: 480px) {
    width: 90%; /* Ocupa mais espaço em telas muito pequenas */
    top: 40px; /* Ajusta a posição para evitar sobreposição */
  }
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 8px;
  width: 500px;

  &:focus {
    outline: none;
    border-color: ${Colors.yellow};
  }

  @media (max-width: 1024px) {
    width: 100%; /* Faz o campo de busca ocupar toda a largura disponível */
    margin-right: 0; /* Remove a margem direita */
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Ajusta o tamanho da fonte para telas menores */
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${Colors.red};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Colors.yellow};
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Ajusta o tamanho do botão em telas menores */
    padding: 6px 12px; /* Reduz o padding em telas pequenas */
  }
`;
