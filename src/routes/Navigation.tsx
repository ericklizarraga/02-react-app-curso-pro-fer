import { BrowserRouter, NavLink, Route, Switch,} from "react-router-dom";

//  @ts-ignore
import { Lazypage01,Lazypage03,Lazypage02 } from '../01-lazyload/pages';

import img from '../assets/react.svg';
export const Navigation = ()=>{

  
    return(
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={img} alt="imagen" />

                    <ul>
                        <li>
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
                        </li>
                    </ul>
                </nav>

                <Switch>
                    
                    <Route path="/lazy1" >
                        <Lazypage01/>
                    </Route>

                    <Route path="/lazy2">
                        <Lazypage02/>
                    </Route>

                    <Route path="/lazy3">
                        <Lazypage03/>
                    </Route>
                   
                    
                </Switch>
            </div>
        </BrowserRouter>
    );
}