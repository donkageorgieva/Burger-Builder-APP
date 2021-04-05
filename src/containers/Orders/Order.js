import { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import { Redirect } from "react-router";
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';
class Orders extends Component{
state = {
    order:[],
    loading: true,
}
componentDidMount() {
    axios.get('/orders.json').then(response => {
            const orders = [];
            for (let key in response.data){
              orders.push({...response.data[key],
            id: key});
            }
    this.setState({order: orders,
    loading:false})
    
    })
        }
render(){
console.log(this.props)
const allOrders = this.state.order.map(order=>{
 
    return <Order  ingredients={order.ingredients} price={"$" + order.totalPrce[1]}  />
})
    return(
        <div>
{allOrders}
        </div>
       
    )
}
}


export default Orders;