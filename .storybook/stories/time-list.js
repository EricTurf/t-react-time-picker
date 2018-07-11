import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ItemList } from '../../src/components/item-list';

storiesOf('ItemList', module)
  .add('Hours', () => (
    <ItemList
      onClick={action('Hour selected')}
      items={[
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ]}
    />
  ))
  .add('Minutes', () => (
    <ItemList
      onClick={action('minute selected')}
      items={Array(12)
        .fill(0)
        .map((_, i) => (5 * i < 10 ? `0${5 * i}` : `${5 * i}`))}
    />
  ));
