
import formJson from './custom-form.json';

export const getInitialValues = () => {

    const initialValues: { [key: string]: any } = {}

   for(const input of formJson){
    initialValues[input.name] = input.value;
   }

   return initialValues;
}


