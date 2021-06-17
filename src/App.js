import { Route, Switch } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from './components/Container';
import AppBar from "./components/AppBar/AppBar";
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
const HomeView = lazy(()=>import('./views/HomeView'));
const RegisterView = lazy(()=>import('./views/RegisterView'));
const LoginView = lazy(()=>import('./views/LoginView'));
const ContactsView = lazy(()=>import('./views/ContactsView'));



export default function App () {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);

  return (
    <>
    <Container>
      <AppBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute 
            path="/register" 
            restricted
            redirectTo="/contacts"
            component={RegisterView}/>
          <PublicRoute 
            path="/login" 
            restricted 
            redirectTo="/contacts"
            component={LoginView}/>
          <PrivateRoute 
            path="/contacts" 
            redirectTo="/login"
            component={ContactsView}/>
        </Switch>
      </Suspense>
    </Container>
    </>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   };

//   render() {
//     return (
//       <>
//       <Container>
//         <AppBar/>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Switch>
//             <Route exact path="/" component={HomeView} />
//             <PublicRoute 
//               path="/register" 
//               restricted
//               redirectTo="/contacts"
//               component={RegisterView}/>
//             <PublicRoute 
//               path="/login" 
//               restricted 
//               redirectTo="/contacts"
//               component={LoginView}/>
//             <PrivateRoute 
//               path="/contacts" 
//               redirectTo="/login"
//               component={ContactsView}/>
//           </Switch>
//         </Suspense>
//       </Container>
//       </>
//     );
//   };
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: getCurrentUser,
// }

// export default connect(null, mapDispatchToProps)(App);
