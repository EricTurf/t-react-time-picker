import React from 'react';

import { Time, Clock, Main } from './index.styled';

import { Popover } from './components/pop-over';

export default class TimePicker extends React.Component {
  state = { showPicker: false };

  togglePicker = () => this.setState({ showPicker: !this.state.showPicker });

  render() {
    const { value } = this.props;
    const { showPicker } = this.state;
    const timeRegex = /\d:\d\d\s[a-p].[m]/g;

    if (typeof value === 'string' && value.match(timeRegex) === null)
      throw new Error(
        'value supplied must either be a date or a string with the following format h:mm a.m/p.m'
      );

    return (
      <Main>
        <Time isOpen={showPicker} onClick={this.togglePicker}>
          {value || 'Click me to select a time'}
          <Clock />
        </Time>
        {showPicker && (
          <Popover
            onSelect={this.props.onSelect}
            value={value || '12:00 a.m'}
          />
        )}
      </Main>
    );
  }
}
