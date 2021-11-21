import React from 'react'
import ColorView from '../modules/ColorView';
import * as portfolioStyles from '../../styles/portfolio.module.scss'

const ColorPalette = ({ slice }) => (
    <div className={`${portfolioStyles.layoutSection} sectionMaxWidth`}>
        <div className={`${portfolioStyles.twoColumn}`}>
            <h3>Color Palette</h3>
            <ColorView colors={slice.items} />
        </div>
    </div>
)

export default ColorPalette