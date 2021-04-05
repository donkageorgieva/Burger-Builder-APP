import React from 'react';
import styles from './Order.module.css'
import axios from '../../axios-orders';
const order = (props) => {
let ingredients = [];
for (let ingredientName in props.ingredients){
ingredients.push({
    name: ingredientName,
    amount: props.ingredients[ingredientName]
})

}
console.log(ingredients);
const ingredientsElements = ingredients.map(ig => {
    return <span key={ig.name}>{ig.name} : {+ig.amount.toFixed(2)} </span> 
})
return(
    
    <div className={styles.Order}>
       {ingredientsElements}
        <p>Price: {props.price}</p>
    </div>
)
}

export default order;