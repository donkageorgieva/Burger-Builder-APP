import React from 'react';
import logoIMG from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = props => {
    return (
<img className={styles.Logo} src={logoIMG} alt='Logo'></img>
    )

}

export default logo;