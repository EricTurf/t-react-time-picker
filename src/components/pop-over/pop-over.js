import React from 'react';

import {
  Main,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from './pop-over.styled';

import { Time } from '../time';

export default class Popover extends React.Component {
  render() {
    return (
      <Main>
        <Time
          onTimeChange={this.props.onTimeChange}
          value={this.props.time || this.props.value}
        />
        <ButtonContainer>
          <CancelButton onClick={this.props.togglePicker} />
          <ConfirmButton onClick={this.props.onSelect} />
        </ButtonContainer>
      </Main>
    );
  }
}
