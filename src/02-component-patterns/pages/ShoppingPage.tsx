
import { ProductBotons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';

const product = {
  id:'1',
  title:'Coffe Mug mondongo',
  img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
     <h1> ShoppingPage</h1>
     <hr />

    <div style={{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
    }}>
      <ProductCard product={product}>
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title={'hora vergas'} className="text-white text-bold"/>
          <ProductCard.Botons className='custom-boton'/>
      </ProductCard>
      
      <ProductCard 
        product={product}
        className = "bg-dark"
      >
         <ProductImage className="custom-image" />
         <ProductTitle className="text-white text-bold"/> 
         <ProductBotons className='custom-boton'/>
      </ProductCard>

      <ProductCard 
        product={product}
        style={{
          backgroundColor:'#70d1F8'
        }}
      >
         <ProductImage 
          style={{
            borderColor:'red',
            border:'100px'
          }}
         />
         <ProductTitle 
          style={{
            color:'yellow'
          }}
         /> 
         <ProductBotons 
          style={{
            width:'100px',
            margin:'0 auto',
            paddingTop:'10px'
          }}
         />
      </ProductCard>
      
     
    </div>

    </div>
  )
}



