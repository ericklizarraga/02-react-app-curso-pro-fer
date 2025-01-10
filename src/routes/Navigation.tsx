import { BrowserRouter, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";

//  @ts-ignore

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
            
                    <Route path="/*" element={<Navigate to={'/lazy1'} replace/>}></Route>
                    
                </Routes>
            </div>
        </BrowserRouter>
    );
}