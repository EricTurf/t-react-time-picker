import React from 'react';

import { Main } from './pop-over.styled';

import { Time } from '../time';

export default class Popover extends React.Component {
  render() {
    return (
      <Main>
        <Time onSelect={this.props.onSelect} value={this.props.value} />
      </Main>
    );
  }
}
