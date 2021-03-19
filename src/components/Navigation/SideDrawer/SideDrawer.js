import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
const sideDrawer = props => {
  const drawerClasses = [styles.SideDrawer, props.show ?  styles.Open : styles.Close].join(' ');
    return(
        <React.Fragment>
            <Backdrop show ={props.show}toggle={props.toggle}/>
   <div className={drawerClasses}>
          
          <div className={styles.Logo}>
          <Logo />
          </div>

<nav>
  <NavigationItems />

</nav>

      </div>
        </React.Fragment>
     
    )
}

export default sideDrawer;