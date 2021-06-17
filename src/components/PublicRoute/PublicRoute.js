import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PublicRoute =( { component: Component, IsAuthenticated, redirectTo, ...routeProps }) => (
    <Route
    {...routeProps}
    render={props => IsAuthenticated && routeProps.restricted ? (
    <Redirect to={redirectTo} />):(
    <Component {...props} />)}
    />
);

const mapStateToProps = state => ({
    IsAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(PublicRoute); 