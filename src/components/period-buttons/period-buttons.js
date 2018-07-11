import React from 'react';

import { StyledButtonBar } from './period-buttons.styled';

export default class PeriodButtons extends React.Component {
  render() {
    return (
      <StyledButtonBar
        activeColor="rgb(116,200,248)"
        mode={this.props.mode.replace('.', '').toUpperCase()}
        color="rgb(220,220,230)"
        buttons={[
          {
            label: 'AM',
            onClick: e => {
              e.preventDefault();
              this.props.onPeriodChange('a.m');
            },
          },
          {
            label: 'PM',
            onClick: e => {
              e.preventDefault();
              this.props.onPeriodChange('p.m');
            },
          },
        ]}
      />
    );
  }
}
