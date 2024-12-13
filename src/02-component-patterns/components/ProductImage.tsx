import { useContext } from "react";
import { ProductContextProps } from "../interfaces/product.inteface";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export interface Props  {
    img?:string;
    className?:string;
    style?:React.CSSProperties;
}

export const ProductImage = ({ img = '',className,style }:Props) => {

    const { product } = useContext<ProductContextProps>(ProductContext);

    if (!img) {
        img = product.img as string;
    }

    return (
        <img 
            className={`${styles.productImg} ${className}`} 
            src={img ? img : noImage} alt='producto img'
            style={style}
         />
    )
}