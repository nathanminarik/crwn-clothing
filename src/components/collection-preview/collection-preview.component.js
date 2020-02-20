import React from 'react';
import { CollectionItem } from './../collection-item';
import './collection-preview.styles.scss'


export const CollectionPreview = ({
    items,
    title
}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter(( _, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                )
            )}
        </div>
    </div>
);
