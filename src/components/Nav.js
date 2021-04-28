import React, { useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { navData  } from '../data/navData'
import Logo from '../components/Logo'
// import logo from '../images/gfx/logo.svg'
import { AiOutlineInstagram } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'
import { FaLinkedinIn } from 'react-icons/fa'

const Nav = () => {
    const data = useStaticQuery(graphql`
    query navSocial {
        site {
            siteMetadata {
            social {
                github
                instagram
                linkedin
            }
            title
            }
        }
    }`)
    const siteSocial = data.site.siteMetadata.social

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".navBar").className = "navBar navScroll";
            } else {
                document.querySelector(".navBar").className = "navBar";
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navBar">
            <div className="nav-wrapper">
                {/* Logo */}
                <div className="logo-contain">
                    <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                        {/* <img src={logo} alt="Bmediax Logo" id="logo" />  */}
                        <Logo height={50} width={35} />
                        <span className="logo-text">Bmediax</span>
                        {/* <StaticImage src="../images/gfx/logo.png" alt="Rieko Mia Williams For PCC Logo" placeholder="blurred" height={70} align="center" /> */}
                    </Link>
                </div>

                {/* Menu */}
                <div className="nav-contain">
                    <ul className="menu">
                        {navData.map((navs, index) => (
                            <li key={index}>
                                <Link to={navs.path} className="nav-item" activeClassName="active">{navs.title}</Link>
                                {navs.sub &&
                                    <ul>
                                        {navs.sub.map((subs, index) => (
                                            <li key={index}>
                                                {subs.path 
                                                ? 
                                                <Link to={subs.path} title={subs.title}>{subs.title}</Link>
                                                :
                                                <a href={subs.link}>{subs.title}</a>
                                                } 
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div className="social-media_bar">
                    <motion.a 
                        href={`https://instagram.com/${siteSocial.instagram}`} 
                        target="_blank" 
                        rel="noreferrer"
                        animate={{ y:0 }}
                        initial={{ y:30 }}
                        whileHover={{ scale:1.1}}
                        whileTap={{ scale:.9 }}>
                        <AiOutlineInstagram />
                    </motion.a>
                    <motion.a 
                        href={`https://github.com/${siteSocial.github}`} 
                        target="_blank" 
                        rel="noreferrer"
                        animate={{ y:0 }}
                        initial={{ y:30 }}
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:.9 }}>
                        <DiGithubAlt />
                    </motion.a>
                    <motion.a 
                        href={`https://linkedin.com/in/${siteSocial.linkedin}`} 
                        target="_blank" 
                        rel="noreferrer"
                        animate={{ y:0 }}
                        initial={{ y:30 }}
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:.9 }}>
                        <FaLinkedinIn />
                    </motion.a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;