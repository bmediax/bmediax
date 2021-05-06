import React from 'react';
import * as ColorViewStyles from './ColorView.module.scss'

const ColorView = ({ colors }) => {
    return (
        <div className={ColorViewStyles.colorView}>
            {colors.colour.map((color, index) => (
                <span key={index} className={ColorViewStyles.colorBlock} style={{backgroundColor: color}}>
                    <span className={ColorViewStyles.colorText}>{color}</span>
                </span>
            ))}
        </div>
    );
};

export default ColorView;