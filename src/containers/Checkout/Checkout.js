import React, {Component} from 'react';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
 
state ={
    ingredients: {
        salad: 1,
        cheese: 1,
        meat: 1,
        bacon: 1,
    }
}
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredientsList = {};
    for (let param of query.entries() ){
       ingredientsList[param[0]] = +param[1];
    }
    this.setState({ingredients: ingredientsList})
}
checkoutCancelHandler = () => {
this.props.history.goBack();
}
checkoutContinueHandler= () => {
    this.props.history.replace('checkout/contact-data');  
}
render(){
    console.log(this.props);
    return(
<div>
    <CheckoutSummary ingredients={this.state.ingredients} onCheckoutCanceled={this.checkoutCancelHandler} onCheckoutContinued={this.checkoutContinueHandler}/>
</div>
    )
}
}



export default Checkout;