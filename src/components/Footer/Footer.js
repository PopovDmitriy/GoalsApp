import React from 'react';
import Button from '../../ui/Button/Button'

import './Footer.css'

const header = (props) => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Button clicked="true" onClickToggle = {props.onClickToggle}/>
                <Button clicked="true" onClickToggle = {props.onClickToggle}/>
                <Button clicked="true" onClickToggle = {props.onClickToggle}/>
                <Button clicked="true" onClickToggle = {props.onClickToggle}/>
            </div>
        </footer>
    )
}

export default header