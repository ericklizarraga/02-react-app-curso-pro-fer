
import { ProductBotons, ProductCard, ProductImage, ProductTitle } from '../components'

import '../styles/custom-styles.css';
import { products } from '../data/products';


const product = products[0];

export const ShoppingPage = () => {



  return (
    <div>
      <h1> ShoppingPage</h1>
      <hr />


      <ProductCard
        product={product}
        className="bg-dark"
        key={product.id}
        inicialValues={{
          count: 5,
          maxCount: 10
        }}
      >
        {
          ({
            count,
            maxCount,
            increaseBy,
            isMaxCountReached,
            product,
            reset
          }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductBotons
                className='custom-boton'
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached ? <button onClick={() => increaseBy(2)}>+2</button> : null
              }
              <span>count: {count}</span>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}



