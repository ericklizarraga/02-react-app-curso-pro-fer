import React from 'react';
import { lazy,LazyExoticComponent } from 'react';
//  @ts-ignore
import { Lazypage01, Lazypage03, Lazypage02 } from '../01-lazyload/pages';


type JSXComponent = ()=> React.JSX.Element;

interface Route {
    to: string;
    path: string;
    // Component: () => LazyExoticComponent<JSXComponent> | JSXComponent;
    Component: JSXComponent;
    name: string;
}


//  @ts-ignore
const Lazy1 = lazy(()=> import(/*webpackChunkName: "Lazypage01" */'../01-lazyload/pages/Lazypage01')) as JSXComponent;//  @ts-ignore
const Lazy2 = lazy(()=> import(/*webpackChunkName: "Lazypage02" */'../01-lazyload/pages/Lazypage02')) as JSXComponent;//  @ts-ignore
const Lazy3 = lazy(()=> import(/*webpackChunkName: "Lazypage03" */'../01-lazyload/pages/Lazypage03')) as JSXComponent;


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1 ,
        name: 'lazy1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'lazy2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'lazy3'
    },
]