import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion'

export const wrapPageElement = ({element}) => (
    <ParallaxProvider>
        <AnimatePresence initial={false} exitBeforeEnter>
            {element}
       </AnimatePresence>
    </ParallaxProvider>
)