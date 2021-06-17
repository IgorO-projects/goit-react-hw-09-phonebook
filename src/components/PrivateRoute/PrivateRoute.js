import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, IsAuthenticated, redirectTo, ...routeProps }) => (
    <Route 
        {...routeProps} 
        render={props => IsAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} /> } 
    />
);

const mapStateToProps = state => ({
    IsAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(PrivateRoute);