import styled from 'styled-components';

const Button = styled.button`
  background-color: #5ac494;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #52b287;
  }
`;

export default Button;
