import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function PrivateRoute ({ redirectTo, children, ...routeProps }) {
        const IsAuthenticated = useSelector(getIsAuthenticated)
        return <Route {...routeProps}>
            {IsAuthenticated ? children : <Redirect to={redirectTo} />}
        </Route>
    }
    
// const mapStateToProps = state => ({
//     IsAuthenticated: getIsAuthenticated(state),
// })

// export default connect(mapStateToProps)(PrivateRoute);