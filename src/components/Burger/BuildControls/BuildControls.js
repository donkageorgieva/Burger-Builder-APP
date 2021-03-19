import React from 'react';
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},

]

const buildControls = props => {
    const price = <p>Total price: <strong>{props.price}</strong></p>
return (
<div className = {styles.BuildControls}>
{price}
{controls.map(ctrl=>(<BuildControl key={ctrl.label} label={ctrl.label}
added={()=> props.ingredientAdded(ctrl.type)} removed ={()=> props.ingredientRemoved(ctrl.type)}
disabled={props.disabled[ctrl.type]}/>))}
<button className={styles.OrderButton}  disabled={props.orderDisable} onClick ={props.checkout}>ORDER NOW</button>
</div>
)

 

};


export default buildControls;