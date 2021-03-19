import React, {Component} from'react';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';



class Modal extends Component {
shouldComponentUpdate(nextProps, nextState){
    if(nextProps.show !== this.props.show || nextProps.children !== this.props.children){
        return true;
    } else {
        return false;
    }
}

render(){
    return(
        <React.Fragment>
            
            <Backdrop show={this.props.show} toggle={this.props.toggle} />
            <div className={styles.Modal}
        style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh'}}>
    
    
            {this.props.children}
    
     
      
        </div>
        </React.Fragment>)
}
  
}

export default Modal;