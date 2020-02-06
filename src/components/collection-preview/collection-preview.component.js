import React from 'react';

export const CollectionPreview = ({
    items,
    title
}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter(( _, idx) => idx < 4)
                .map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)