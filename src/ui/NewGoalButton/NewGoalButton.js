import React from 'react';
import Button from '../Button/Button';

import './NewGoalButton.css'

const newGoalButton = () => {
    return (
        <button className="newGoalBtn">
            <p>Create new goal</p>
            <Button />
        </button>
    )
}

export default newGoalButton