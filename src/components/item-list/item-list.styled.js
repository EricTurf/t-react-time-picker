import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const Item = styled.div`
  transition: all 0.2s;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  display: flex;
  color: ${({ selected }) => (selected ? 'black' : 'white')};
  background-color: ${({ selected }) => (selected ? 'rgb(116,200,248)' : '')};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 50%;
  font-size: 12px;
  width: 25px;
  height: 25px;
  &:hover {
    background-color: rgb(8, 70, 102);
    cursor: pointer;
    color: white;
  }
`;
