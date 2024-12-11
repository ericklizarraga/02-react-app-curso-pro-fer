import { useContext } from "react";
import { ProductContextProps } from "../interfaces/product.inteface";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: String }) => {

    const { product } = useContext<ProductContextProps>(ProductContext);

    if (!title) {
        title = product.title;
    }

    return (
        <span className={styles.productDescription}>{title}</span>
    );
}