import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component{
state = {
orderForm: {
 
        name:{
            elementType: 'input',
            elementConfig: {
           type: "text",
           placeholder: "Your Name",
          
            },
            value: "Dony"
        } ,
        address: {
            elementType: 'input',
            elementConfig: {
           type: "text",
           placeholder: "Address",
          
            },
            value: "" 
        },
        subcode: {
            elementType: 'input',
            elementConfig: {
           type: "text",
           placeholder: "Subcode",
          
            },
            value: "Dony"
        },
        country: {
            elementType: 'input',
            elementConfig: {
           type: "text",
           placeholder: "Your Country",
          
            },
            value: "Dony"
        },
        email: {
            elementType: 'input',
            elementConfig: {
           type: "email",
           placeholder: "Your Email",
          
            },
            value: "Dony"
        },
        delivery: {
            elementType: 'select',
            elementConfig: {
         options: [
             {value: "fastest", displayValue: "fastest"},
             {value: "cheapest", displayValue: "cheapest"}
         ]
          
            },
            value: "Dony"
        }

},
  loading: false,



}
orderHandler = () => {

     this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            totalPrce: this.props.price,
           
        }
       axios.post('/orders.json',order).then(response=>{
           console.log('hi')
           this.setState({loading: false})
           console.log(response)
       }).catch(error=> {
        this.setState({loading: false})
           console.log(error)
       })
}
render(){

    return (
        <div className={styles.ContactData}>
<h4>Enter your contact data</h4>
<div className={styles.Form}>
    <Input inputtype="input" type="text" name="name" placeholder="your name"/>
    <Input inputtype="input" type="text" name="email" placeholder="your email"/>
    <Input inputtype="input" type="text" name="street" placeholder="your street"/>
    <Input inputtype="input" type="text" name="postal code" placeholder="your postal code"/>
    <Button btntype="Success" clicked={this.orderHandler}>Order</Button>
</div>
        </div>
    )
}
}


export default ContactData;