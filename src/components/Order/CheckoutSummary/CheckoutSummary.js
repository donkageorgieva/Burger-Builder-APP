
import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
const checkoutSummary = (props) =>{
return(
    <div className={classes.CheckoutSummary}>
 <h1> We hope it tastes amazing!</h1>
 <div style={{width: "100%", height: "300px", margin: "auto"}}>< Burger ingredients={props.ingredients} /></div>
 <Button btntype='Danger' clicked={props.onCheckoutCanceled}>Cancel</Button>
 <Button btntype='Success'  clicked={props.onCheckoutContinued}>Continue</Button>
    </div>
   

)
}

export default checkoutSummary;