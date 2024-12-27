import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/product.inteface";

interface Props {
    product: Product
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: Props) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product });
        }
        
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        !!onChange && onChange({ product, count: newValue });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy
    }
}

