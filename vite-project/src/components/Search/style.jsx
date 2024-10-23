// SearchBarStyles.jsx
import styled from 'styled-components';
import Colors from "../../Utils/Colors"

export const Form = styled.form`
        width: 50%;
        position: absolute;
        top: 60px;
        right: 300px;
        z-index: 1;
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
`;
