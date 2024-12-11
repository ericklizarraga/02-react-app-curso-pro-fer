
import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContextProps } from '../interfaces/product.inteface';
import { ProductContext } from './ProductCard';


export const ProductBotons = () => {

    const { useProduct: { increaseBy, counter } } = useContext<ProductContextProps>(ProductContext);


    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} > - </button>

            <div className={styles.countLabel}>  {counter} </div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    );
}
