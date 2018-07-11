import React from 'react';

import { Main, Heading } from './time.styled';

import { ItemList } from '../item-list';

import { PeriodButtons } from '../period-buttons';

export default class Time extends React.Component {
  static defaultProps = { step: 5 };

  handleMinuteChange = minute => {
    const { value, onSelect } = this.props;

    const [hour, min] = value.split(':');
    const period = min.split(' ')[1];

    onSelect(`${hour}:${minute} ${period}`);
  };

  handleHourChange = hour => {
    const { value, onSelect } = this.props;

    const [hr, x] = value.split(':');
    const [minute, period] = x.split(' ');

    onSelect(`${hour < 10 ? hour.replace('0', '') : hour}:${minute} ${period}`);
  };

  handlePeriodChange = period => {
    const { value, onSelect } = this.props;

    onSelect(`${value.split(' ')[0]} ${period}`);
  };

  buildTimes = () => {
    const { step } = this.props;
    const hours = [
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
    ];

    const length = 60 / step;

    const minutes = Array(length)
      .fill(0)
      .map((_, i) => (step * i < 10 ? `0${step * i}` : `${step * i}`));

    return { hours, minutes };
  };

  render() {
    const { hours, minutes } = this.buildTimes();

    const [hour, minute] = this.props.value.split(' ')[0].split(':');

    return (
      <Main>
        <Heading>Hours</Heading>
        <ItemList
          items={hours}
          onClick={this.handleHourChange}
          selectedValue={hour < 10 ? `0${hour}` : hour}
        />
        <Heading>Minutes</Heading>
        <ItemList
          onClick={this.handleMinuteChange}
          items={minutes}
          selectedValue={minute}
        />
        <PeriodButtons
          onPeriodChange={this.handlePeriodChange}
          mode={this.props.value.split(' ').pop()}
        />
      </Main>
    );
  }
}
