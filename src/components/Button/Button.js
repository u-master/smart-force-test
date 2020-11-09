import styled from 'styled-components';

const Button = styled.button`
  flex-shrink: 0;
  font-weight: bold;
  border-radius: 7px;
  border: 1px solid #007bff;
  height: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  color: ${({ theme: { textColor = 'white' } }) => textColor};
  background-color: ${({ theme: { backgroundColor = '#007bff' } }) => backgroundColor};
  border-color: ${({ theme: { borderColor = '#007bff' } }) => borderColor};
  &:hover {
    background-color: ${({ theme: { hoverBackgroundColor = '#0069d9' } }) => hoverBackgroundColor};
    border-color: ${({ theme: { hoverBorderColor = '#0069d9' } }) => hoverBorderColor};
  }
`;

// color="white" background="#32aa32" #1ea01e;

export default Button;
