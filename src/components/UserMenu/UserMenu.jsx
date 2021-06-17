import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './avatar.png'
import styles from './UserMenu.module.css';
import { getUseremail } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UserMenu () {
  const email = useSelector(getUseremail);
  const dispatch = useDispatch();
  const OnLogout = useCallback(() => dispatch(logOut()), [dispatch]);

    return (
      <div className={styles.container}>
        <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
        <span className={styles.name}>Hello there, {email}</span>
        <Button variant="danger" type="button" onClick={OnLogout}>
          Quit..
        </Button>
      </div>
    );
}

