import React from 'react';
import * as ColorViewStyles from './ColorView.module.scss'

const ColorView = ({ colors }) => {
    // const [isColourBig, setIsColourBig] = useState('false')

    // useEffect(() => {
    //     if ( colors.length > 5 ) {
    //         setIsColourBig(true)
    //     }
    //     else {
    //         setIsColourBig(false)
    //     }
    // }, [colors])

    // useEffect(() => {
    //     if (colors.length > 5 ) {
    //         return 'repeat(3, 1fr)';
    //     }
    //     else if ( colors.length < 5 ) {
    //         return 'repeat(4, 1fr)';
    //     }
        
    //     else {
    //         return 'repeat(5, 1fr)';
    //     }
    // }, [colors])

    const colourLength = (colors) => {
        if (colors.length > 5 ) {
            return 'repeat(3, 1fr)';
        }
        else if ( colors.length <= 5 ) {
            return `repeat(${colors.length}, 1fr)`;
        }
        
        else {
            return 'repeat(5, 1fr)';
        }
    }

    return (
        <div className={ColorViewStyles.colorView} style={{ gridTemplateColumns: colourLength(colors) }}>
            {colors.map((color, index) => (
                <span key={index} className={ColorViewStyles.colorBlock} style={{backgroundColor: color.colour, boxShadow: `0px 30px 35px -35px ${color.colour}`}}>
                    <span className={ColorViewStyles.colorText}>{color.colour}</span>
                </span>
            ))}
        </div>
    );
};

export default ColorView;