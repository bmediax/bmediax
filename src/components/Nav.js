import React, { useEffect, useState } from 'react';
import * as variables from '../styles/_variables.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { motion } from "framer-motion";
// import { useMediaQuery } from 'react-responsive';
import { debounce } from '../utilities/helpers';  
import { AiOutlineInstagram } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'
import { FaLinkedinIn } from 'react-icons/fa'

import { navData  } from '../data/navData'
import Logo from '../components/Logo'
import MobileNav from './mobileNav';

const Nav = ({ theme }) => {
    const [ isMobileMenuOpen, SetIsMobileMenuOpen ] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  
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

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        
        setPrevScrollPos(currentScrollPos);
    }, 80);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
        
    }, [prevScrollPos, visible, handleScroll]);
    
    useEffect(() => {
        const handleScrolls = () => {
            if (window.scrollY > 0) {
                document.querySelector(".navBar").className = "navBar navScroll";
            } else {
                document.querySelector(".navBar").className = "navBar";
            }
        };
        
        window.addEventListener("scroll", handleScrolls);
        return () => window.removeEventListener("scroll", handleScrolls);
    }, []);
    
    const toggleMobileMenu = () => {
        SetIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="navBar" style={{ top: visible ? '0' : '-85px', background: theme ? `${variables.masOscuro}` : '' }}>
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
                                {/* style={{ color: theme ? `${variables.minimal}` : '' }} */}
                                <Link to={navs.path} className="nav-item" activeClassName="active" style={{ color: theme ? `${variables.mist}` : '' }}>{navs.title}</Link>
                                {navs.sub &&
                                    <ul>
                                        {navs.sub.map((subs, index) => (
                                            <li key={index}>
                                                {subs.path 
                                                ? 
                                                <Link to={subs.path} title={subs.title} style={{ background: theme ? `${variables.oscuro}` : '', color: theme ? `${variables.minimal}` : ''}}>{subs.title}</Link>
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
                    <div className="msocials_wrapper">
                        <a rel="noreferrer" target="_blank" href={`https://instagram.com/${siteSocial.instagram}`} className="msocials-item">
                            <AiOutlineInstagram />
                        </a>
                        <a rel="noreferrer" target="_blank" href={`https://github.com/${siteSocial.github}`} className="msocials-item">
                            <DiGithubAlt />
                        </a>
                        <a rel="noreferrer" target="_blank" href={`https://linkedin.com/in/${siteSocial.linkedin}`} className="msocials-item">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <MobileNav onPress={toggleMobileMenu} />

                {/* Social Media */}
                <div className="social-media_bar">
                    {/* <DropdownModule primary/> */}
                    <motion.a 
                        href={`https://instagram.com/${siteSocial.instagram}`} 
                        target="_blank" 
                        rel="noreferrer"
                        // animate={{ y:0 }}
                        // initial={{ y:30 }}
                        whileHover={{ scale:1.1}}
                        whileTap={{ scale:.9 }}>
                        <AiOutlineInstagram />
                    </motion.a>
                    <motion.a 
                        href={`https://github.com/${siteSocial.github}`} 
                        target="_blank" 
                        rel="noreferrer"
                        // animate={{ y:0 }}
                        // initial={{ y:30 }}
                        whileHover={{ scale:1.1 }}
                        whileTap={{ scale:.9 }}>
                        <DiGithubAlt />
                    </motion.a>
                    <motion.a 
                        href={`https://linkedin.com/in/${siteSocial.linkedin}`} 
                        target="_blank" 
                        rel="noreferrer"
                        // animate={{ y:0 }}
                        // initial={{ y:30 }}
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