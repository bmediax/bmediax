export const slowSlideUp = {
    hidden: { 
        opacity: 0,
        y:100
    },
    show: {
        opacity: 1,
        y:0
        // transition: {
        //     delayChildren: 0.5
        // }
    },
    transition: {
        duration: 3
    }
}

export const slowFadeIn = {
    hidden: {
        opacity:0
    },
    show: {
        opacity:1
    },
    transition: {
        duration: 8,
        delay:2
    }
}

export const titleTextFadeIn = {
    hidden: {
        opacity:0,
        x:-100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5
        }
    },
    exit: {
        opacity:0
    }
}