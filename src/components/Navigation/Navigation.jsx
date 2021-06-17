import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';  
import styles from './Navigation.module.css';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors.js';


export default function Navigation () {
  const IsAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink 
        to="/" 
        exact 
        className={styles.link} 
        activeClassName={styles.activeLink}
      >
        Main
      </NavLink>
  
      {IsAuthenticated && <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>}
    </nav>
  );
};


// const Navigation = ({ IsAuthenticated }) => (
//   <nav>
//     <NavLink 
//       to="/" 
//       exact 
//       className={styles.link} 
//       activeClassName={styles.activeLink}
//     >
//       Main
//     </NavLink>

//     {IsAuthenticated && <NavLink
//       to="/contacts"
//       exact
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Contacts
//     </NavLink>}
//   </nav>
// );
// const mapStateToProps = state => ({
//   IsAuthenticated: getIsAuthenticated(state),
// })

// export default connect(mapStateToProps)(Navigation);