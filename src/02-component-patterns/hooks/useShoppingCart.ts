import React, { useState } from 'react'
import { onChangeArgs, ProductInCart, ProductInCartArr } from '../interfaces/product.inteface';

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<ProductInCartArr>({});

    const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart(shopCart => {

        const productInCart: ProductInCart = shopCart[product.id] || { ...product, count: 0 };

        if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
            ...shopCart,
            [product.id]:productInCart
        }
        }

        const { [product.id]:toDelete, ...rest } = shopCart;
        return rest;
        // let arrCart = { ...shopCart }
        // if (count===0) {
        //    delete arrCart[`${product.id}`];

        //    return arrCart;
        // }

        // return {
        //   ...arrCart,
        //   [product.id]: {
        //     ...product,
        //     count
        //   }

        // }
    });

    }

    return {
        onProductCountChange,
        shoppingCart
    }
}


