import styled from 'styled-components';

const Message = styled.p`
  color: ${(props) => (props.error ? 'red' : 'silver')};
  font-size: 0.8rem;
`;

export default Message;
