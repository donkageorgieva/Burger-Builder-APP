import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "Dony",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      subcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Subcode",
        },
        value: "Dony",
        validation: {
          required: true,
          minLength: 1,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Country",
        },
        value: "Dony",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "Dony",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      delivery: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "fastest" },
            { value: "cheapest", displayValue: "cheapest" },
          ],
        },
        value: "fastest",
      
        valid: true,
      },
    
    },
    formIsValid: false,
    loading: false,
  };
  checkValiditiy(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim("") !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  orderHandler = (e) => {
    e.preventDefault();
     this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
   
    const order = {
      ingredients: this.props.ingredients,
      totalPrce: this.props.price,
      orderData: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log("hi");
        this.setState({ loading: false });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };
  inputChangedHandler = (e, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = e.target.value;

    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    if (updatedFormElement.validation) {
      updatedFormElement.valid = this.checkValiditiy(
        updatedFormElement.value,
        updatedFormElement.validation
      );
    }

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btntype="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        </form>
    );
    
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        <form className={styles.Form} onSubmit={this.orderHandler}>
         {form}

  
    
        </form>
      </div>
    );
  }
}

export default ContactData;
