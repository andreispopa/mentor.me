import React from 'react';

export const List = ({ items, itemComponent: ItemComponent, ...props }) => (
    <div>
        {items.map((item, index) => {
            return <ItemComponent {...props} key={index} item={item} />;
        })}
    </div>
);
