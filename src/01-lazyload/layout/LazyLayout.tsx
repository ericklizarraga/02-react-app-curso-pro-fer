import { NavLink, Route, Routes } from "react-router-dom";//  @ts-ignore
import { Lazypage01, Lazypage03, Lazypage02 } from '../pages';
export const LazyLayout = () => {
    return (
        <div>
            <h1>lazyLayout page</h1>

            <ul>
                <li>
                    <NavLink to={'lazy1'}>Lazi1</NavLink>
                </li>
                <li>
                    <NavLink to={'lazy2'}>Lazi2</NavLink>
                </li>
                <li>
                    <NavLink to={'lazy3'}>Lazi3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<Lazypage01/>}/>
                <Route path="lazy2" element={<Lazypage02/>}/>
                <Route path="lazy3" element={<Lazypage03/>}/>
            </Routes>
        </div>
    );
}

export default LazyLayout;