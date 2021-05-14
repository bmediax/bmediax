import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement = ({element}) => (
    <AnimatePresence exitBeforeEnter>
        <ParallaxProvider>
            {element}
        </ParallaxProvider>
    </AnimatePresence>
)