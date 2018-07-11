import styled from 'styled-components';

import { Button } from '../button';

export const Main = styled.div`
  position: absolute;
  display: flex;
  top: 30px;
  color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(35, 41, 45);
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 15px;
  border-radius: 6px;
  z-index: 3;

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent rgb(35, 41, 45) transparent;
  }
`;
