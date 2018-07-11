import React from 'react';

import { Main, StyledButton } from './button-bar.styled';

export default class PeriodButtons extends React.Component {
  render() {
    const { buttons, color, activeColor, className, mode } = this.props;
    return (
      <Main className={className}>
        {buttons.map(button => (
          <StyledButton
            className={className}
            key={button.label}
            {...button}
            color={color}
            activeColor={activeColor}
            active={mode === button.label.toUpperCase()}
          />
        ))}
      </Main>
    );
  }
}
