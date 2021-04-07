
import React from 'react';
import styles from './Input.module.css'
const input = props => {
    let inputElement = null;
    let classes = styles.InputElement;
    if(props.invalid && props.shouldValidate && props.touched){
        classes = [styles.Invalid, styles.InputElement].join(' ');
    }
    switch(props.elementType){
        case('input'):
        inputElement = <input className={classes} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
        break;
        case('textarea'):
        inputElement = <textarea  className={classes} {...props.elementConfig}  value={props.value} onChange={props.changed}/>;
        break;
        case('select'):
        inputElement = (<select className={classes} 
         value={props.value} onChange={props.changed}> 
        {props.elementConfig.options.map(option=>(
             <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
        </select>);
        break;
        default: 
        inputElement = null
        break;
    }
return (
    <div className={styles.Input}>
        <label className={styles.Label}>{props.elementValue}</label>
        {inputElement}
    </div>
)
}

export default input;