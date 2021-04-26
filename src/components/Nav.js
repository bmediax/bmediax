import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { navData  } from '../data/navData'

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                {/* Logo */}
                <div className="logo-contain" id="logo">
                    {/* <Link to="/" exact="true"> */}
                        <h4> Image </h4>
                        {/* <StaticImage src="../images/gfx/logo.png" alt="Rieko Mia Williams For PCC Logo" placeholder="blurred" height={70} align="center" /> */}
                    {/* </Link> */}
                </div>

                {/* Menu */}
                <div className="nav-contain">
                    <ul className="menu">
                        {navData.map((navs, index) => (
                            <li key={index}>
                                <Link to={navs.path} className="nav-item" activeClassName="active">{navs.title}</Link>
                                {/* {navs.sub &&
                                    <ul>
                                        {navs.sub.map((subs, index) => (
                                            <li key={index}>
                                                {subs.path 
                                                ? 
                                                <AnchorLink to={subs.path} title={subs.title} onClick={handleMobileToggle}>{subs.title}</AnchorLink>
                                                :
                                                <a href={subs.link}>{subs.title}</a>
                                                } 
                                            </li>
                                        ))}
                                    </ul>
                                } */}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div className="social-media_bar">
                    Social Media
                </div>
            </div>
        </nav>
    );
};

export default Nav;