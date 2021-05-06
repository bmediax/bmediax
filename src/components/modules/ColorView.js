import React from 'react';
import * as ColorViewStyles from './ColorView.module.scss'

const ColorView = ({ colors }) => {
    return (
        <div className={ColorViewStyles.colorView}>
            {colors.map((color, index) => (
                <span key={index} className={ColorViewStyles.colorBlock} style={{backgroundColor: color.colour}}>
                    <span className={ColorViewStyles.colorText}>{color.colour}</span>
                </span>
            ))}
        </div>
    );
};

export default ColorView;