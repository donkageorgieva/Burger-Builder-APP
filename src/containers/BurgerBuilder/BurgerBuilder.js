import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6,

}

class BurgerBuilder extends Component  {


    state = {
        ingredients: null,
        totalPrice: 4,
        shouldDisable : true,
        shouldCheckout: false,
        loading: false,
        error: false,
    }
componentDidMount(){
    console.log(this.props);
    axios.get('https://burger-builder-661ad-default-rtdb.firebaseio.com/Ingredients.json').then(response=> {
        this.setState({ingredients: response.data})
  

    }).catch(error => {
        this.setState({error: true})
    })
}
    addIngredientHandler = (type)=> {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
       const updatedIngredients = {...this.state.ingredients};
       const ingredientPrice = INGREDIENT_PRICES[type];
       let updatedTotalPrice = this.state.totalPrice + ingredientPrice;

       updatedIngredients[type] = updatedCount;
    

       

       this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
       this.checkIngredients(updatedIngredients);

    }
    removeIngredientHandler = (type)=>{
      
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        if (updatedIngredients[type]>=0){
            let updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
        }
     this.checkIngredients(updatedIngredients);


    }
    checkIngredients = (ingredients) => {
       const sum = Object.values(ingredients).reduce((prevValue,currValue)=>prevValue+currValue);
      sum > 0  ?  this.setState({shouldDisable:false}) : this.setState({shouldDisable:true})
          

  
       

    }
    shouldDisable = () => {
        const ingredientsInfo = {
            ...this.props.ings
        };
        const ingredientsList =  Object.keys(ingredientsInfo).map((ingredient)=> {
            return ingredient > 0;
        })
  
       ingredientsList.length>0 ?  this.setState({shouldDisable : true}) : this.setState({shouldDisable : false});
   
       
  
    }
   checkOut = () => {
      this.setState({shouldCheckout: true})
    }
    toggleModal = () => {
        const toggle = !this.state.shouldCheckout;
        this.setState({shouldCheckout: toggle})
    }
    continueToCheckout = () => {
     const queryParams =[];
     for (let i in this.props.ings){
         queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
     }
     queryParams.push("price=" + this.state.totalPrice);
const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
   
    }
    render(){
    
        const disabledInfo = {
            ...this.props.ings
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
    //     let checkoutInfo;
    //   this.state.shouldCheckout ? checkoutInfo = <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>:
    //   checkoutInfo = null
    let burger = <Spinner />;
    let  orderSummary;
    if(this.state.error){
        burger = <h1>ERROR</h1>
    }
     if(this.props.ings){
         burger =              (<React.Fragment>
         <Burger ingredients = {this.props.ings}/>
         <BuildControls ingredientAdded={this.props.onIngredientAdded} ingredientRemoved ={this.props.onIngredientRemoved}
         disabled={disabledInfo} price={this.props.totalPrice.toFixed(2)} 
         orderDisable={this.state.shouldDisable} checkout={this.checkOut}/></React.Fragment>)
         orderSummary = <OrderSummary ingredients={this.props.ings} toggle={this.toggleModal}
     price={this.state.totalPrice.toFixed(2)} continueToCheckOut={this.continueToCheckout}/>;
     if(this.state.loading){
        orderSummary = <Spinner />
     }
     }
  
      
        return (
            <React.Fragment>
  
            <Modal show={this.state.shouldCheckout} toggle={this.toggleModal}>
          
             {orderSummary}
           
           
            </Modal >
            
            {burger}
            </React.Fragment>
        )
    }
  

}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (name) => {
            dispatch({type: actionTypes.ADD_INGREDIENT, payload: {
                ingredientName: name,
              
            }})
        },
        onIngredientRemoved: (name) => {
            dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: {
                ingredientName: name,
              
            }})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));