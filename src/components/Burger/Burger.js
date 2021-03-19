import React from 'react';
import styles from './Burger.module.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let  ingredientsList  = Object.keys(props.ingredients)
    .map(ingredient =>   [...Array(props.ingredients[ingredient])].map((item, index)=> {
     return <BurgerIngredient type={ingredient} key={ingredient + index} />
    }) ).reduce((prevValue, currValue)=> {
       return prevValue.concat(currValue);
    }, []);

    if (ingredientsList.length === 0){
        ingredientsList = <p>Please add some ingredients</p>
    }

return(
    <div className={styles.Burger}>
        <BurgerIngredient type= 'bread-top' />
   {ingredientsList}
   <BurgerIngredient type= 'bread-bottom' />

    </div>
)
}








export default burger;