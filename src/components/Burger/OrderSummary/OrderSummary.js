import React ,{Component} from 'react';
import Button from '../../UI/Button/Button'

class Summary extends Component {
    componentDidUpdate(){
        console.log('Updated');
    }
   
    render(){
        const ingredientList = Object.keys(this.props.ingredients).map(ingredient=> {
       
            return <li key={ingredient}><span>{ingredient}:</span> {this.props.ingredients[ingredient]}</li>;
        })
        return (
            <React.Fragment>
                <h1>Your order</h1>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientList}
                </ul>
                <h2>Total: ${this.props.price}</h2>
                <p>Continue to checkout?</p> 
                <Button btntype='Danger' clicked={this.props.toggle}>
                    CANCEL
                </Button>
                <Button btntype='Success' clicked={this.props.continueToCheckOut}>
                    CONTINUE
                </Button>
                {/* <button onClick={props.toggle}>CANCEL</button>
                <button>CONTINUE</button> */}
                
            </React.Fragment>
        )
    }
 
}

export default Summary;