import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Nav from '../components/Nav'
import Seo from '../components/Seo'

import FriendsSection from '../components/FriendsSection.js'
import WorkSection from '../components/WorkSection'

import '../styles/reset.css'
import '../styles/_base.scss'

const Layout = ({children, title, descr, darkNav}) => {
    return (
        <div id={title}>
            <Seo title={title} description={descr}/>
            <Nav theme={darkNav}/>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    initial={{ opacity:0, y:-100 }}
                    animate={{ opacity: 1, y:0 }}
                    exit={{ opacity:0, y:100 }}
                    transition={{ duration:.6 }}>
                    {children}
                </motion.div>
            </AnimatePresence>
            <FriendsSection />
            <WorkSection />
        </div>
    )
}

export default Layout