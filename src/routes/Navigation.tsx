import { BrowserRouter, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";

//  @ts-ignore

import img from '../assets/react.svg';
// import RegisterPage from "../03-forms/pages/RegisterPage";
// import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
// import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
// import { FormikComponents } from "../03-forms/pages/FormikComponents";
// import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction";

import {
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage
} from '../03-forms/pages';


export const Navigation = () => {


    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={img} alt="imagen" />

                    <ul>
                        <li>
                            <NavLink
                                to={"/register"}
                                className={({ isActive }) => isActive ? 'nav-active' : '--'}
                            >register</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/formik-basic"}
                                className={({ isActive }) => isActive ? 'nav-active' : '--'}
                            >formik-basic</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/formik-yup"}
                                className={({ isActive }) => isActive ? 'nav-active' : '--'}
                            >formik-Yup</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/formik-components"}
                                className={({ isActive }) => isActive ? 'nav-active' : '--'}
                            >formik-components</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/formik-abstraction"}
                                className={({ isActive }) => isActive ? 'nav-active' : '--'}
                            >formik-abstraction</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>

                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/formik-basic" element={<FormikBasicPage />}></Route>
                    <Route path="/formik-yup" element={<FormikYupPage />}></Route>
                    <Route path="/formik-components" element={<FormikComponents />}></Route>
                    <Route path="/formik-abstraction" element={<FormikAbstraction />}></Route>
                    <Route path="/*" element={<Navigate to={'/'} replace />}></Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}