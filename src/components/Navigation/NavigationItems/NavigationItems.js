import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './NavigationItems.module.css'



const navigationItems = () => {
    return(
        <ul className={styles.NavigationItems}>
  <NavigationItem link='/' >Burger Builder</NavigationItem>
  <NavigationItem link='/orders'>Order</NavigationItem>
        </ul>
     
    )

}

export default navigationItems;