
import React, { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/Nolazy";
// import { Lazypage01,Lazypage02,Lazypage03 } from "../01-lazyload/pages" 

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

// const Lazypage01 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage01'));
// const Lazypage02 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage02'));
// const Lazypage03 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage03'));

const LazyLayout = lazy(()=>import(/*webpackChunkName: "Lazylayout-nested"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: LazyLayout,
        name: 'Lazyload Nested'
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'no lazy loading'
    },
    // {
    //     path: '/lazy1',
    //     Component: Lazypage01,
    //     name: 'LazyPage-1'
    // },
    // {
    //     path: '/lazy2',
    //     Component: Lazypage02,
    //     name: 'LazyPage-2'
    // },
    // {
    //     path: '/lazy3',
    //     Component: Lazypage03,
    //     name: 'LazyPage-3'
    // },
]