import React from 'react';
import { lazy,LazyExoticComponent } from 'react';
//  @ts-ignore
import { Lazypage01, Lazypage03, Lazypage02 } from '../01-lazyload/pages';//  @ts-ignore
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = ()=> React.JSX.Element;

interface Route {
    to: string;
    path: string;
    // Component: () => LazyExoticComponent<JSXComponent> | JSXComponent;
    Component: JSXComponent;
    name: string;
}


//  @ts-ignore
const LazyLayout = lazy(()=> import(/*webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')) as JSXComponent;


export const routes: Route[] = [

    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/NoLazy',
        path: '/NoLazy',
        Component: NoLazy,
        name: 'NoLazy'
    },
]