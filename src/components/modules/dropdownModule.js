import React, { useState } from 'react';
import ToastModule from './ToastModule'
import * as DropdownModuleStyles from './dropdownModule.module.scss'

// External Libs
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownModule = () => {
    const [isSelect, SetIsSelect ] = useState({
        selected: ''
    })

    const options = [
        {
            value: 'Copy to Clipboard',
            label: 'Copy to Clipboard',
            className: 'success',
        }, 
        {
            value: 'Open your Mail App',
            label: 'Open your Mail App',
            className: 'success',
        },
    ]
    
    const _onSelect = (option) => {
        SetIsSelect({selected: option})
        selectAction(option)
        // console.log('You selected', option.label)
    }
    
    function selectAction(selectedAction) {
        if (selectedAction.label === 'Copy to Clipboard') {
            console.log("It's copied now!")

            const emailData = document.createElement('textarea');
            emailData.value = 'hello@bmediax.dev';
            emailData.setAttribute('readonly', '');
            emailData.style.position = 'absolute';
            emailData.style.left = '-9999px';
            document.body.appendChild(emailData);
            emailData.select();
            document.execCommand('copy');
            document.body.removeChild(emailData);
        }
        
        else if (selectedAction.label === 'Open your Mail App') {
            window.location.href = "mailto:hello@bmediax.dev";
            console.log("It's on the email app now")
        }
        return null
    }

    return (
        <>
        {/* <motion.div initial={{ scale:0 }} animate={{ scale: 1 }}> */}
        <ToastModule message="Copied to Clipboard" type="yes" />
        <Dropdown options={options} onChange={_onSelect} placeholder="hello@bmediax.dev" controlClassName="btn primary active" menuClassName={DropdownModuleStyles.dropdownMenu} arrowClassName={DropdownModuleStyles.arrowDrop} />
        {/* </motion.div> */}
        </>
    );
};

export default DropdownModule;