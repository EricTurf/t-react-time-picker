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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;

export const CancelButton = styled(Button)`
  width: 50%;
  color: white;
  height: 100%;
  border-bottom-left-radius: 6px;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: rgb(60, 65, 65);
  }
`;

CancelButton.defaultProps = {
  label: 'Cancel',
};

export const ConfirmButton = styled(Button)`
  width: 50%;
  height: 100%;
  color: white;
  border-bottom-right-radius: 6px;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: rgb(60, 65, 65);
  }
`;

ConfirmButton.defaultProps = {
  label: 'Confirm',
};
