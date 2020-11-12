import React from 'react';

import './Button.css';

const button = (props) => {
    return (
        <button className="button" onClick={props.onClickToggle}>
            <svg className="button--extinct" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="36px" height="36px"><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M3 12L21 12M3 6L21 6M3 18L21 18"/></svg>
            <svg className="button--active" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
    )
}

export default button