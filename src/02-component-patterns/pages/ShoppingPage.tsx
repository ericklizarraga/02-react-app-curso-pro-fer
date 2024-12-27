
import { useState } from 'react';
import { ProductBotons, ProductCard, ProductImage, ProductTitle } from '../components'
import { onChangeArgs, Product } from '../interfaces/product.inteface';
import '../styles/custom-styles.css';


interface ProductInCart extends Product {
  count: number;
}

interface ProductInCartArr {
  [clave: string]: ProductInCart;
}

const product1 = {
  id: '1',
  title: 'Coffe Mug mondongo',
  img: './coffee-mug.png'
}
const product2 = {
  id: '2',
  title: 'Coffe Mug mondongo2',
  img: './coffee-mug2.png'
}


const products: Product[] = [product1, product2];

export const ShoppingPage = () => {

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

  return (
    <div style={{
      width: '100%'
    }}>
      <h1> ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

      }}>

        {
          products.map(product => (
            <ProductCard
              product={product}
              className="bg-dark"
              key={product.id}
              onChange={onProductCountChange}
              value={shoppingCart[`${product.id}`]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductBotons 
                className='custom-boton'
                style={{
                  display:'flex',
                  justifyContent:'center'
                }}
              />
            </ProductCard>
          ))
        }

      </div>


      <div className="shopping-cart">
        {
          Object.values(shoppingCart).map(product => (
            <ProductCard
              product={product}
              className="bg-dark"
              key={product.id}
              style={{
                width: '100px'
              }}
              value={product.count}
              onChange={onProductCountChange}

            >
              <ProductImage className="custom-image" />
              <ProductBotons className='custom-boton' />
            </ProductCard>
          ))
        }
      </div>

      <div>
        <pre>
          {JSON.stringify(shoppingCart, null, 5)}
        </pre>
      </div>
    </div>
  )
}



