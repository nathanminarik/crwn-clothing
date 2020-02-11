import React from 'react';
import './form-input.styles.scss';

export const FormInput = ({
    handleChange,
    id,
    label,
    ...otherFormInputProps
}) => (
    <div className='group'>
        <input 
            id={id}
            className='form-input'
            onChange={handleChange}
            {...otherFormInputProps}
        />
        {
            label
                ? (
                    <label htmlFor={id} className={`${otherFormInputProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
                : null
        }
    </div>
);
