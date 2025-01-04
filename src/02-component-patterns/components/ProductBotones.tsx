
import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContextProps } from '../interfaces/product.inteface';
import { ProductContext } from './ProductCard';

export interface Props {
    className?: string;
    style?:React.CSSProperties;
}

export const ProductBotons = ({ className,style }: Props) => {

    const { useProduct: { increaseBy, counter,maxCount } } = useContext<ProductContextProps>(ProductContext);

    const isMaxReached = useCallback(()=>{
        return counter === maxCount;
    },[counter,maxCount])();

    console.log({counter,maxCount,isMaxReached});
    
    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} > - </button>

            <div className={styles.countLabel}>  {counter} </div>

            <button 
                className={`${styles.buttonAdd} ${ !!isMaxReached ? styles.disabled: null}`} 
                onClick={() => increaseBy(1)}
            > + </button>
        </div>
    );
}
