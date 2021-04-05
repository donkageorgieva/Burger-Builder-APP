
import React from 'react';
import styles from './Input.module.css'
const input = props => {
    let inputElement = null;
    switch(props.elementType){
        case('input'):
        inputElement = <input className={styles.InputElement} {...props.elementConfig} value={props.value}/>;
        break;
        case('textarea'):
        inputElement = <textarea  cl {...props.elementConfig}  value={props.value}/>;
        break;
        default: 
        inputElement = <input className={styles.InputElement}  {...props.elementConfig} value={props.value} />
    }
return (
    <div className={styles.Input}>
        <label className={styles.Label}>{props.elementValue}</label>
        {inputElement}
    </div>
)
}

export default input;