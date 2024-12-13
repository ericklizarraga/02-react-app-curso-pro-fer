import { useContext } from "react";
import { ProductContextProps } from "../interfaces/product.inteface";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    title?: String;
    className?:string;
    style?:React.CSSProperties;
}

export const ProductTitle = ({ title,className,style }: Props) => {

    const { product } = useContext<ProductContextProps>(ProductContext);

    if (!title) {
        title = product.title;
    }

    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >{title}</span>
    );
}