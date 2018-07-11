import styled from 'styled-components';

import { ButtonBar } from '../button-bar';
import { StyledButton } from '../button-bar/button-bar.styled';

export const StyledButtonBar = styled(ButtonBar)`


  ${StyledButton} {
    width: 30px;
    transition:all 0.2s;
    border-radius:0px;
    &:hover {
      background-color: rgb(8, 70, 102)
  }
`;
