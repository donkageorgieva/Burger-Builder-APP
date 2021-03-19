import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let className = null;
    switch(props.type){
        case ('bread-bottom'):
            className = <div className = {styles.BreadBottom}></div>;
            break;
            case ('bread-top'):
                className = <div className = {styles.BreadTop}>
           
                        <div  className = {styles.Seeds1}> </div>
                        <div  className = {styles.Seeds2}></div>
                   
                </div>;
                break;
                case ('meat'):
                    className = <div className = {styles.Meat}></div>;
                    break;
                    case ('cheese'):
                        className = <div className = {styles.Cheese}></div>;
                        break;
                        case ('salad'):
                            className = <div className = {styles.Salad}></div>;
                            break;
                            case ('bacon'):
                                className = <div className = {styles.Bacon}></div>;
                                break;
                                default:
                                className = null;
    }
return className;
}
burgerIngredient.propTypes ={
    type: PropTypes.string.isRequired,
}

export default burgerIngredient;