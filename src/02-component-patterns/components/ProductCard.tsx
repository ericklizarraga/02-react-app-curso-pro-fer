import styles from '../styles/styles.module.css';

import React, { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/product.inteface.ts';


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?:number;
}


export const ProductContext = createContext<ProductContextProps>({
    product: {
        id: '',
        title: '',
        img: ''
    },
    useProduct: {
        counter: 0,
        increaseBy: (value: number) => { }
    }
});



export const ProductCard = function producto({ children, product, className, style, onChange,value }: Props) {



    const { counter, increaseBy } = useProduct({ product, onChange,value });

    

    return (
        <ProductContext.Provider value={{ product, useProduct: { counter, increaseBy } }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </ProductContext.Provider>
    )
}
