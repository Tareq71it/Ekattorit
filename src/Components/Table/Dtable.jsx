import React from 'react'

import { useState } from 'react';

const DropdownList = ({ items, onItemClick }) => {
    return (
      <div>
        {items.map((item, index) => (
          <div key={index} onClick={() => onItemClick(item)}>
            {item}
          </div>
        ))}
      </div>
    );
  };
  
  const SelectedItem = ({ selected }) => {
    return (
      <div>
        {selected && (
          <div>
            Selected Item: {selected}
          </div>
        )}
      </div>
    );
  };

const Dtable = () => {

    const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <DropdownList items={items} onItemClick={handleItemClick} />
      </div>
      <div>
        <SelectedItem selected={selectedItem} />
      </div>
    </div>
  </div>
  )
}

export default Dtable





