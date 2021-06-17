import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function AppBar () {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

//  const AppBar = ({ isAuthenticated }) => {

//   return (
//     <header className={styles.header}>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }
// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state)
// })

// export default connect(mapStateToProps)(AppBar);