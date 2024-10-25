import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Lazypage01, Lazypage02, Lazypage03 } from "../pages";


export const Navigation = () => {

    const { path, url } = useRouteMatch();
    return (
        <>
            <h2>lazy layout pages</h2>

            <ul>
                <li>
                    <Link to={`${url}/lazy1`}>Lazy page 1</Link>
                </li>
                <li>
                    <Link to={`${url}/lazy2`}>Lazy page 2</Link>
                </li>
                <li>
                    <Link to={`${url}/lazy3`}>Lazy page 3</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${path}/lazy1`}>
                    <Lazypage01/>
                </Route>
                <Route exact path={`${path}/lazy2`}>
                    <Lazypage02/>
                </Route>
                <Route exact path={`${path}/lazy3`}>
                    <Lazypage03/>
                </Route>

                <Redirect to={`${path}/lazy1`}/>
            </Switch>
        </>
    );
}