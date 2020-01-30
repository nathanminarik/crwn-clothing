import React, { Component } from 'react';

// Get styles and data
import './directory.styles.scss';
import { sections } from './directory.data';

// Get components
import { MenuItem } from './../menu-item/menu-item.component';

export class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections
        }
    }

    render () {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({
                        id,
                        imageUrl,
                        size,
                        title
                    }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}