/**
*
* AppBar
*
*/

import React from 'react';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
       <div className={styles.iconButton} onClick={toggleDrawer}>
         <FontAwesome className={styles.font} name="bars"/>
       </div>
       <div className={styles.heading}>Coder Daily</div>
       <div className={styles.linkContainer}>log in</div>
    </div>
  );
}
AppBar.propTypes = {
	 toggleDrawer : React.PropTypes.func.isRequired
}
export default AppBar;
