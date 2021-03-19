import React from 'react';
import styles from './Button.module.css'

const btn = (props) => {
return(
    <button onClick={props.clicked} className={[styles.Button, styles[props.btntype]].join(' ')}>
    {props.children} </button>
)
}


export default btn;