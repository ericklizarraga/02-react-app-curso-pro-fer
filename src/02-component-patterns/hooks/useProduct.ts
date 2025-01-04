import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/product.inteface";

interface Props {
    product: Product
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    inicialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, inicialValues }: Props) => {

    const [counter, setCounter] = useState(inicialValues?.count || value);

    const verificarMaxCount = (maxCount: number, newValue: number) => {
        return newValue > maxCount ? maxCount : newValue;
    }

    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);
        setCounter(
            !!inicialValues?.maxCount
                ? verificarMaxCount(inicialValues.maxCount, newValue)
                : newValue
        );

        !!onChange && onChange({ product, count: newValue });
    }

    const reset = () => {
        setCounter(0);
    }

    useEffect(() => {
        setCounter(inicialValues?.count || value);
    }, [value, inicialValues?.count]);



    return {
        counter,
        maxCount: !!inicialValues?.maxCount ? inicialValues.maxCount : undefined,
        isMaxCountReached: counter === inicialValues?.maxCount,

        increaseBy,
        reset,
    }
}

