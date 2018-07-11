import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from '../../src/index';
const getStateTimePicker = value =>
  class StateTimePicker extends React.Component {
    state = { value };
    render() {
      return (
        <TimePicker
          value={this.state.value}
          onSelect={value => this.setState({ value })}
        />
      );
    }
  };

storiesOf('Time Picker', module)
  .add('State machine', () => {
    const Picker = getStateTimePicker('1:20 a.m');
    return <Picker />;
  })
  .add('State machine no initial value', () => {
    const Picker = getStateTimePicker();
    return <Picker />;
  })
  .add('no initial value', () => {
    return <TimePicker onSelect={action('new time')} />;
  })
  .add('Initial value', () => <TimePicker value={'1:20 a.m'} />)
  .add('wrong initial value', () => <TimePicker value="LUL" />);
