
import { ProductBotons, ProductCard, ProductImage, ProductTitle } from '../components'

import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

  
  const { onProductCountChange,shoppingCart } = useShoppingCart();



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
                  display: 'flex',
                  justifyContent: 'center'
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



