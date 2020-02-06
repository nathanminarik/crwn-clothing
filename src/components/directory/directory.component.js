import React, { Component } from 'react';

// Get styles and data
import './directory.styles.scss';
import { SECTIONS } from '../../mock-data';

// Get components
import { MenuItem } from './../menu-item/menu-item.component';

export class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: SECTIONS
        }
    }

    render () {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({
                        id,
                        ...otherSectionProps
                    }) => (
                        <MenuItem
                            key={id}
                            {...otherSectionProps}
                        />
                        // We could keep adding props but it's getting redundant
                        // So instead we'll spread the ...rest
                        // <MenuItem
                        //     key={id}
                        //     title={title}
                        //     imageUrl={imageUrl}
                        //     linkUrl={linkUrl}
                        //     size={size} 
                        // />
                    ))
                }
            </div>
        )
    }
}