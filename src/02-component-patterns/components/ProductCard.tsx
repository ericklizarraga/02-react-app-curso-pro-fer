import styles from '../styles/styles.module.css';

import { createContext, ReactElement, useContext, useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/product.inteface';

import { ProductTitle } from './ProductTitle';
import { ProductBotons } from './ProductBotones';
import { ProductImage } from './ProductImage';


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



export const ProductCard = function producto({ children, product }: Props) {



    const { counter, increaseBy } = useProduct();

    return (
        <ProductContext.Provider value={{ product, useProduct: { counter, increaseBy } }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </ProductContext.Provider>
    )
}


ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Botons = ProductBotons;
