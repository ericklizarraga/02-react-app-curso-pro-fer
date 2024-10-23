import { BrowserRouter, NavLink, Redirect, Route, Switch,} from "react-router-dom";


import { Lazypage01,Lazypage03,Lazypage02 } from '../01-lazyload/pages';

import img from '../assets/react.svg';
import { routes } from "./routes";
import { Suspense } from "react";


export const Navigation = ()=>{

  
    return(
        <Suspense fallback={<span>loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={img} alt="imagen" />

                        <ul>
                            {/* <li>
                                <NavLink 
                                    to={"/lazy1"}  
                                    activeClassName="nav-active"
                                >lazy1</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={"/lazy2"} 
                                    activeClassName="nav-active"
                                >lazy2</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={"/lazy3"} 
                                    activeClassName="nav-active"
                                >lazy3</NavLink>
                            </li> */}

                            {
                                routes.map( route => (
                                    <li key={route.name}>
                                        <NavLink to={route.path} activeClassName="nav-active" exact>
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Switch>
                        
                        {/* <Route path="/lazy1" >
                            <Lazypage01/>
                        </Route>

                        <Route path="/lazy2">
                            <Lazypage02/>
                        </Route>

                        <Route path="/lazy3">
                            <Lazypage03/>
                        </Route> */}
                    {
                        routes.map(({name,path,Component})=>(
                            <Route key={name} path={path} render={()=><Component/>} >
                                {/* {Component} */}
                            </Route>
                        ))
                    }
                        <Redirect to={routes[0].path}/>
                    </Switch>
            </div>
            </BrowserRouter>
        </Suspense>
      
    );
}