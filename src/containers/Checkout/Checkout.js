import React, {Component} from 'react';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';
class Checkout extends Component {
 
state ={
    ingredients: {},
    price: 0,
}
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredientsList = {};
let price=0;
    for (let param of query.entries() ){
        if(param[0] === 'price'){
          price = param;
        } else{
            ingredientsList[param[0]] = +param[1];
        }
      
    }
    this.setState({ingredients: ingredientsList, price: price})
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
    <Route path={this.props.match.path + '/contact-data'} render={()=> (<ContactData ingredients={this.state.ingredients} price={this.state.price}/>)} />
</div>
    )
}
}



export default Checkout;