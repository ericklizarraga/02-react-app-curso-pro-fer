export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductBotons } from './ProductBotones';


import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductBotons } from './ProductBotones'
import { ProductCard as ProductImageHoc } from './ProductCard'
import { ProductCardHocProps } from '../interfaces/product.inteface';



export const ProductCard:ProductCardHocProps = Object.assign(ProductImageHoc, {
    Image: ProductImage,
    Title: ProductTitle,
    Botons: ProductBotons,
});


export default ProductCard;