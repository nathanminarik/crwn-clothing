// Get packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Get state
import { selectSections } from '../../redux';

// Get components
import { MenuItem } from './../menu-item';

// Get styles
import './directory.styles.scss';

const DirectoryNotConnected = ({
    directoryData
}) => (
    <div className='directory-menu'>
        {
            directoryData.map(({
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
    directoryData: selectSections
})

export const Directory = connect(mapStateToProps)(DirectoryNotConnected);