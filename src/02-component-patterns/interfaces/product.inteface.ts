
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductBotonProps } from "../components/ProductBotones";
import { Props as ProductCardProps } from "../components/ProductCard";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface UseProduct {
    counter?: number;
    increaseBy: (value: number) => void;
    maxCount: number | undefined;
}

export interface ProductContextProps {
    product: Product;
    useProduct: UseProduct;
}

export interface ProductCardHocProps {
    ({ children, product, className }: ProductCardProps): JSX.Element;

    Image: (props: ProductImageProps) => JSX.Element;

    Title: (props: ProductTitleProps) => JSX.Element;

    Botons: (props: ProductBotonProps) => JSX.Element;

}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface ProductInCartArr {
    [clave: string]: ProductInCart;
}


export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number | undefined;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}