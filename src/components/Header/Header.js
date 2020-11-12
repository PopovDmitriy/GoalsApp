import React from 'react';
import Button from '../../ui/Button/Button'
import Logo from '../../ui/Logo/Logo'

import './Header.css'

const header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <Button clicked="true" onClickToggle = {props.onClickToggle}/>
            </div>
        </header>
    )
}

export default header