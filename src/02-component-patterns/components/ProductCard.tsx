import styles from '../styles/styles.module.css';

import React, { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/product.inteface.ts';


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: (handlers: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    inicialValues?: InitialValues;
}


export const ProductContext = createContext<ProductContextProps>({
    product: {
        id: '',
        title: '',
        img: ''
    },
    useProduct: {
        counter: 0,
        increaseBy: (value: number) => { },
        maxCount: undefined
    }
});



export const ProductCard = function producto({ children, product, className, style, onChange, value, inicialValues }: Props) {



    const { counter, increaseBy, maxCount,reset,isMaxCountReached } = useProduct({ product, onChange, value, inicialValues });



    return (
        <ProductContext.Provider
            value={{
                product,
                useProduct: {
                    counter,
                    increaseBy,
                    maxCount
                }
            }}
        >
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                !!children 
                    &&  children({
                            count:counter,
                            increaseBy,
                            maxCount,
                            isMaxCountReached,
                            product,
                            reset,
                        })
                }
            </div>
        </ProductContext.Provider>
    )
}
