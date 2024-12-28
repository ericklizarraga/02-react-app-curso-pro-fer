import React, { useState } from 'react'
import { onChangeArgs, ProductInCart, ProductInCartArr } from '../interfaces/product.inteface';

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<ProductInCartArr>({});

    const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart(shopCart => {


        let arrCart = { ...shopCart }
        if (count===0) {
           delete arrCart[`${product.id}`];

           return arrCart;
        }

        return {
          ...arrCart,
          [product.id]: {
            ...product,
            count
          }

        }
    });

    }

    return {
        onProductCountChange,
        shoppingCart
    }
}


