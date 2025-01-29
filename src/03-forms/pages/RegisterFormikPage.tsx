
import '../styles/styles.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>RegisterFormikPage</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2,"el nombre debe de tener mas de 2 caracteres")
                                    .max(15)
                                    .required('requerido'),
                        email: Yup.string()
                                    .min(6)
                                    .required('requerido')
                                    .email('debe ser un email valido'),
                        password: Yup.string()
                                        .min(6)
                                        .required('requerido'),
                        password2: Yup.string()
                                        .min(6)
                                        .equals([Yup.ref('password')],'las contraseñas no son iguales')
                                        .required('requerido'),
                    })
                }
            >
               {
                    ({handleReset}) => (
                        <Form noValidate>

                            <Field
                                name="name"
                                placeholder='juan'
                                type="text"
                            />
                            <ErrorMessage name='name' component={"span"}/>

                            <Field
                                name="email"
                                placeholder='juan@juan.com'
                                type="email"
                            />
                            <ErrorMessage name='email' component={"span"}/>

                            <Field
                                name="password"
                                placeholder='***********'
                                type="password"
                            />
                            <ErrorMessage name='password' component={"span"}/>

                            <Field
                                name="password2"
                                placeholder='***********'
                                type="password"
                            />
                            <ErrorMessage name='password2' component={"span"}/>

        
                            <button type="submit">create</button>
                            <button type="button" onClick={handleReset}>reset</button>
                        </Form>
                    )
               }
            </Formik>

           
        </div>
    )
}

