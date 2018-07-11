import styled from 'styled-components';

import { Button } from '../button';

export const StyledButton = styled(Button)`
  width: 50%;
  height: 30px;
  color: ${({ active }) => (active ? 'white' : 'black')};
  background-color: ${({ active, activeColor, color }) =>
    active ? activeColor : color};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  &:hover {
    color: white;
    background-color: red;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
