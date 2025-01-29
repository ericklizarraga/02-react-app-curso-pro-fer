

import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MytextInput } from '../components';
import { getInitialValues } from '../data/get-initial-values';
import { getValidation } from '../data/getValidation';
import * as Yup from 'yup';

export const DynamicForm = () => {
  return (
    <div>
       <h1>DynamicForm</h1>

       <Formik
            initialValues={getInitialValues()}
            onSubmit={(values)=>{
                console.log({values});
                
            }}
            validationSchema={Yup.object({
                ...getValidation(),
            })}
       >
        {
            ()=> (
                <Form noValidate>
                    <span>hola mundo</span>
                    {
                        formJson.map( ({label,name,type,options=null}) => {
                           
                            if(type === "text" || type === "password" || type === "email"){
                                return <MytextInput 
                                    type={type as 'text'} 
                                    name={name} 
                                    label={label} 
                                    key={name}/>
                           }else if(type === "select"){
                                return  <MySelect 
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            
                                            <>
                                                    <option disabled>selecionar</option>
                                                {
                                                    options?.map( ({id,label}) => (
                                                        <option value={id} key={label}>
                                                            {label}
                                                        </option>
                                                    ))
                                                }
                                            </>
                                               
                                            
                                    </MySelect>
                           }
                        })
                    }
                    <button type='submit'>submit</button>
                </Form>
            )
        }
       </Formik>
    </div>
  )
}


