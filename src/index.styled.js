import React from 'react';
import styled from 'styled-components';

export const Time = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: none;
  border-bottom: ${({ isOpen }) =>
    isOpen ? 'solid 1px black' : 'solid 1px transparent'};
  transition: all 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    cursor: pointer;
    border-bottom: solid 1px black;
  }
`;

export const Main = styled.div`
  position: relative;
  width: 200px;
  height: 20px;
`;

export const Value = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  margin: 1px;
`;

export const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);
