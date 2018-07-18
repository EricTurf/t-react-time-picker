import React from 'react';

import { Main, Heading } from './time.styled';

import { ItemList } from '../item-list';

import { PeriodButtons } from '../period-buttons';

import formatHour from '../../utils/format-hour';

const hourRegex = /([0-9]{1,2}(?=:))/g;
const minuteRegex = /([0-9]{2}(?!:))/g;
const periodRegex = /([a|p]\.[m])/g;

export default class Time extends React.Component {
  static defaultProps = { step: 5 };

  handleMinuteChange = minute => {
    const { value, onTimeChange } = this.props;

    onTimeChange(value.replace(minuteRegex, minute));
  };

  handleHourChange = hour => {
    const { value, onTimeChange } = this.props;

    onTimeChange(value.replace(hourRegex, formatHour(hour)));
  };

  handlePeriodChange = period => {
    const { value, onTimeChange } = this.props;

    onTimeChange(value.replace(periodRegex, period));
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
    const { value } = this.props;
    const { hours, minutes } = this.buildTimes();

    const minute = value.match(minuteRegex)[0];
    const hour = value.match(hourRegex)[0];
    const period = value.match(periodRegex)[0];

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
        <PeriodButtons onPeriodChange={this.handlePeriodChange} mode={period} />
      </Main>
    );
  }
}
