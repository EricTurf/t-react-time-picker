import React from 'react';

import { Time, Clock, Main, Value } from './index.styled';

import { Popover } from './components/pop-over';

import formatHour from './utils/format-hour';

export default class TimePicker extends React.Component {
  state = { showPicker: false, time: null };

  static defaultProps = {
    onSelect: () => null,
  };

  componentDidMount() {
    const { value } = this.props;

    if (value) return this.setState({ time: value });

    const today = new Date(Date.now()).toString();

    const currentTime = today.match(/([0-9]{1,2}\:[0-9]{2}(?=:))/g)[0];
    const [hour, minute] = currentTime.split(':');
    const isAM = parseInt(hour) < 12;
    const period = isAM ? 'a.m' : 'p.m';

    const time = `${formatHour(hour)}:${Math.ceil(minute / 5) * 5} ${period}`;

    this.setState({ time });
  }

  togglePicker = () => this.setState({ showPicker: !this.state.showPicker });

  setTime = time => this.setState({ time });

  submitTime = () => this.props.onSelect(this.state.time);

  render() {
    const { value, className } = this.props;
    const { showPicker } = this.state;
    const timeRegex = /\d:\d\d\s[a|p].[m]/g;

    if (typeof value === 'string' && value.match(timeRegex) === null)
      throw new Error(
        'value supplied must either be a date or a string with the following format h:mm a.m/p.m'
      );

    return (
      <Main className={className}>
        <Time isOpen={showPicker} onClick={this.togglePicker}>
          <Value>{value || 'Click me to select a time'}</Value>
          <Clock />
        </Time>
        {showPicker && (
          <Popover
            onTimeChange={this.setTime}
            submitTime={this.submitTime}
            // value={value}
            time={this.state.time}
            togglePicker={this.togglePicker}
          />
        )}
      </Main>
    );
  }
}
