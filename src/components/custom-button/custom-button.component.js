import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({
    children,
    variant,
    ...otherCustomButtonProps
}) => (
    <button
        className={`${variant} custom-button`}
        {...otherCustomButtonProps
    }>
        {children}
    </button>
)
