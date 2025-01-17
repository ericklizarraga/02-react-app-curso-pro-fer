import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

// interface FormValues {
//   name: string;
//   lastName: string;
//   email: string;
// }

export const FormikYupPage = () => {


 
  const { 
    // handleChange,
    handleSubmit,
    // values,
    // handleBlur
    errors,
    touched,
    getFieldProps  } = useFormik({
    initialValues: {
      name: 'erick',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log({values});
    },
    validationSchema:Yup.object({
      name: Yup.string()
                .max(15,'maximo 15 caracteres')
                .required('Requerido'),
      lastName: Yup.string()
                .max(15,'maximo 15 caracteres')
                .required('Requerido'),
      email: Yup.string()
                .required('Requerido')
                .email('no es un email valido')
    })
  });

  
  return (
    <div>
      <h1>FormikYupTutorial</h1>

      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor='name'>First Name</label>
        <input
          type='text'
          // name='name'
          placeholder='juan'
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.name}
          {...getFieldProps('name')}
        />
       { touched.name && errors.name && <span>{errors.name}</span>}


        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          // name='lastName'
          placeholder='domingues'
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.lastName}
          {...getFieldProps('lastName')}
        />
       {  touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


        <label htmlFor='email'> Email</label>
        <input
          type='email'
          // name='email'
          placeholder='juan@domigues.com'
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.email}
          {...getFieldProps('email')}
        />
        {  touched.email && errors.email && <span>{errors.email}</span>}


        <button type="submit">submit</button>

      </form>
    </div>
  )
}



