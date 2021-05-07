import React, { useState, useEffect } from 'react';
import * as ColorViewStyles from './ColorView.module.scss'

const ColorView = ({ colors }) => {
    const [isColourBig, setIsColourBig] = useState('false')

    useEffect(() => {
        if ( colors.length > 5 ) {
            setIsColourBig(true)
        }
        else {
            setIsColourBig(false)
        }
    }, [colors])

    return (
        <div className={ColorViewStyles.colorView} style={{ gridTemplateColumns: isColourBig ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)' }}>
            {colors.map((color, index) => (
                <span key={index} className={ColorViewStyles.colorBlock} style={{backgroundColor: color.colour}}>
                    <span className={ColorViewStyles.colorText}>{color.colour}</span>
                </span>
            ))}
        </div>
    );
};

export default ColorView;