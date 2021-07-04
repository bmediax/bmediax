import React from 'react';
import { Link } from 'gatsby'
// import { BiSun } from 'react-icons/bi'
import * as infoStyles from './InfoCard.module.scss'

const InfoCardModule = ({ title, subtitle, descr, icon }) => {
    // const [ openCard, setOpenCard ] = useState(false)
    // Function that returns the card being open.
    // const isCardOpen = () => {}

    return (
        <Link to="work" className={infoStyles.infoCard}>
            <div className={infoStyles.infoCard_icon}>
                {icon}
            </div>
            <div className={infoStyles.infoCard_text}>
                <h4>{subtitle}</h4>
                <h3>{title}</h3>
                <p>{descr}</p>
            </div>
        </Link>
    );
};

export default InfoCardModule;