import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
class ContactData extends Component{
state = {
    name: '',
    email: '',
  address: {
      street: '',
      postalCode: '',
  },
  loading: false,



}
orderHandler = () => {

     this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            totalPrce: this.props.price,
            customer: {
                name: 'Dony',
                address: 'bul.todorov',
                subcode: '1010',
                country: 'Bulgaria',
                email: 'nfcb@gmail.com',
                delivery: 'fast'
            }
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
    <input className={styles.Input}type="text" name="name" placeholder="your name"/>
    <input className={styles.Input}type="text" name="email" placeholder="your email"/>
    <input className={styles.Input}type="text" name="street" placeholder="your street"/>
    <input className={styles.Input}type="text" name="postal code" placeholder="your postal code"/>
    <Button btntype="Success" clicked={this.orderHandler}>Order</Button>
</div>
        </div>
    )
}
}


export default ContactData;