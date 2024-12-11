import { useContext } from "react";
import { ProductContextProps } from "../interfaces/product.inteface";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext<ProductContextProps>(ProductContext);

    if (!img) {
        img = product.img as string;
    }

    return (
        <img className={styles.productImg} src={img ? img : noImage} alt='producto img' />
    )
}