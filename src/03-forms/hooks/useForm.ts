import { ChangeEvent, useState } from "react";


export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);


    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { value = '', name = '' } = target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const reset = () => setFormData({ ...initialState });

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 
    return {
        // metodos
        onChange,
        reset,
        isValidEmail,

        //propiedades
        formData,
        ...formData
    }
}

export default useForm
