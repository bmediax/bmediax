import React, { useEffect, useState } from 'react';
// import * as variables from '../styles/_variables.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { motion } from "framer-motion";
// import { useMediaQuery } from 'react-responsive';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'
import { FaLinkedinIn } from 'react-icons/fa'

import { navData  } from '../data/navData'
import Logo from '../components/Logo'
// import logo from '../images/gfx/logo.svg'
import MobileNav from './mobileNav';

const Nav = () => {
    const [ isMobileMenuOpen, SetIsMobileMenuOpen ] = useState(false)
    const data = useStaticQuery(graphql`
    query navSocial {
        site {
            siteMetadata {
            social {
                github
                instagram
                linkedin
                youtube
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

    const toggleMobileMenu = () => {
        SetIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="navBar">
            <div className="nav-wrapper">
                {/* Logo */}
                <div className="logo-contain" >
                    <Link to="/" exact="true" className="logoWraps" style={{ outline: "none" }}>
                        <Logo height={60} />
                        <span className="logo-text">mediax</span>
                    </Link>
                </div>

                {/* Menu */}
                <div className='nav-contain' style={{ display: isMobileMenuOpen ? 'block' : 'none'}}>
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

                {/* Mobile Hamburger Menu */}
                <MobileNav onPress={toggleMobileMenu} />

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
                    <motion.a 
                        href={`https://www.youtube.com/${siteSocial.youtube}`} 
                        target="_blank" 
                        rel="noreferrer"
                        animate={{ y:0 }}
                        initial={{ y:30 }}
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:.9 }}>
                        <AiFillYoutube />
                    </motion.a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;