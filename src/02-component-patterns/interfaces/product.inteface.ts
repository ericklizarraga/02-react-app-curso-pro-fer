import { ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface UseProduct {
    counter?: number;
    increaseBy: (value: number) => void;
}

export interface ProductContextProps {
    product: Product;
    useProduct: UseProduct;
}
