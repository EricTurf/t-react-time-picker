import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from '../../src/index';

storiesOf('Time Picker', module).add('default', () => {
  return <TimePicker />;
});
