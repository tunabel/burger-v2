import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <div onClick={props.clicked}>
        </div>
    )
}

export default backdrop;