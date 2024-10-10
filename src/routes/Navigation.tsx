import { BrowserRouter, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";

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
                                className={({isActive})=> isActive ? 'nav-active' : '--' }
                            >lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/lazy2"} 
                                className={({isActive})=> isActive ? 'nav-active' : '--' } 
                            >lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/lazy3"} 
                                className={({isActive})=> isActive ? 'nav-active' : '--' } 
                            >lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<Lazypage01/>}></Route>
                    <Route path="lazy2" element={<Lazypage02/>}></Route>
                    <Route path="/lazy3" element={<Lazypage03/>}></Route>
                    <Route path="/*" element={<Navigate to={'/lazy1'} replace/>}></Route>
                    
                </Routes>
            </div>
        </BrowserRouter>
    );
}