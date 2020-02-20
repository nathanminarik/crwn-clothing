// Get packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Get state
import { selectSections } from '../../redux';

// Get components
import { MenuItem } from './../menu-item';

// Get styles
import './directory.styles.scss';

const DirectoryNotConnected = ({
    sections
}) => (
    <div className='directory-menu'>
        {
            sections.map(({
                id,
                ...otherSectionProps
            }) => (
                <MenuItem
                    key={id}
                    {...otherSectionProps}
                />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export const Directory = connect(mapStateToProps)(DirectoryNotConnected);