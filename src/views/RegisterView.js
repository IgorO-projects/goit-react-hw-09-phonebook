import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './RegisterView.module.css';
import { register } from '../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RegisterView () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      
      default: console.warn(`there is no type of ${name}`);
    }
  }

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className={styles.container}>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleChange} />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button variant="outline-danger" type="submit">Register now</Button>
      </form>
    </div>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   }


//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state)
//     this.setState({ name: '', email: '', password: '' });
//     // dispatch(authOperations.register({ name, email, password }));
//     // setName('');
//     // setEmail('');
//     // setPassword('');
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <div className={styles.container}>
//         <h1>Registration page</h1>
  
//         <form onSubmit={this.handleSubmit} className={styles.form} autoComplete="off">
//           <label className={styles.label}>
//             Name
//             <input type="text" name="name" value={name} onChange={this.handleChange} />
//           </label>
  
//           <label className={styles.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
  
//           <label className={styles.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button variant="outline-danger" type="submit">Register now</Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: register,
// }
// export default connect(null, mapDispatchToProps)(RegisterView);