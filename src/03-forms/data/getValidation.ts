import formJson from './custom-form.json';
import * as yup from 'yup';

export const getValidation = () => {
  
    const requiredFields:{[key:string]:any} = {};

    for(const input of formJson){
        if(!input.validations) continue;

        let schema = yup.string();

        for(const rule of input.validations){
            if(rule.type == "required"){
                schema = schema.required("este campo es requerido");
            }
            if(rule.type == "minlength"){
                schema = schema.min( (rule as any)?.value || 2,'este campo no comple con la longitud minima que es: '+((rule as any)?.value || 2));
            }
            if(rule.type == "email"){
                schema = schema.email((rule as any )?.value || 'no es un correo valido');
            }
        }

        requiredFields[input.name] = schema;
    }

    return requiredFields;   
}


