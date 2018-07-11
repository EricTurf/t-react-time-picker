import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Time } from '../../src/components/time';

storiesOf('Time', module).add('Default', () => <Time />);
