
import React, {Component} from 'react';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state ={
        showDrawer: false,
    }
toggleDrawer = () => {

        // const toggle = !this.state.showDrawer;
        this.setState((prevState)=>{
return {showDrawer: !prevState.showDrawer}
        })
    
}
   render(){
return(
  <React.Fragment>
 
       
    <Toolbar toggleSideDrawer ={this.toggleDrawer} />
    <SideDrawer  toggle ={this.toggleDrawer} show={this.state.showDrawer}/>
    
    <main className ={styles.Content}>
     {this.props.children}
    </main>
        
  </React.Fragment>
)
   } 
}

export default Layout;