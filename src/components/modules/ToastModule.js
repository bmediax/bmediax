import React from 'react';
import * as toastStyles from './Toast.module.scss'
import * as variableStyles from '../../styles/_variables.module.scss'

const ToastModule = ({message}) => {
    return (
        <div className={toastStyles.toastWrap}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13C1 6.92487 5.92487 2 12 2C18.0752 2 23 6.92487 23 13C23 19.0752 18.0752 24 12 24C5.92487 24 1 19.0752 1 13Z" className={toastStyles.circle} />
                <path d="M9 13.5003L9.57827 14.7329C10.0367 15.7098 11.4048 15.7661 11.9419 14.8301L15 9.5" className={toastStyles.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* <path d="M15.125 10L9 16.125" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 10L15.125 16.125" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> */}
            </svg>
            <span style={{color: variableStyles.azure}}>{message}</span>
        </div>
    );
};

export default ToastModule;