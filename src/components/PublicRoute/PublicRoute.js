import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function PublicRoute ({ redirectTo, children, ...routeProps }) {
    const IsAuthenticated = useSelector(getIsAuthenticated);
    return <Route {...routeProps}> 
        {IsAuthenticated && routeProps.restricted ? (
            <Redirect to={redirectTo} />
        ):(
            children
        )}
        </Route>
}

// render={props => IsAuthenticated && routeProps.restricted ? (
//     <Redirect to={redirectTo} />):(
//     <Component {...props} />)}

// const mapStateToProps = state => ({
//     IsAuthenticated: getIsAuthenticated(state),
// })

// export default connect(mapStateToProps)(PublicRoute); 