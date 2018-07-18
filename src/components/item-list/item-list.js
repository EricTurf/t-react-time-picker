import React from 'react';

import { Item, List } from './item-list.styled';

export default ({ items, onClick, selectedValue }) => (
  <List>
    {items.map((v, i) => (
      <Item
        selected={v === selectedValue}
        key={`${v}-${i}`}
        onClick={() => onClick(v)}
      >
        {v}
      </Item>
    ))}
  </List>
);
