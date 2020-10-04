import React from 'react';

export const List = ({ items, itemComponent: ItemComponent }) => (
    <div>
        {items.map((item) => (
            <ItemComponent item={item} />
        ))}
    </div>
);
