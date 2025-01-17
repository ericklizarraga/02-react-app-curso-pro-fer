import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';


interface FormValues {
  name: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = ( values:FormValues ) => {
    
    const errores:FormikErrors<FormValues> = {};

    if(!values.name){
      errores.name = 'Required';
    }else if(values.name.length >= 15){
      errores.name = 'Must be 15 Characters or less'
    }

    if(!values.lastName){
      errores.lastName = 'Required';
    }else if(values.lastName.length >= 25){
      errores.lastName = 'Must be 25 Characters or less'
    }

    if (!values.email) {
      errores.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errores.email = 'Invalid email address';
    }

    return errores;
  }
 
  const { 
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur  } = useFormik({
    initialValues: {
      name: 'erick',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log({values});
    },
    validate,
  });

  
  return (
    <div>
      <h1>FormikBasicTutorial</h1>

      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor='name'>First Name</label>
        <input
          type='text'
          name='name'
          placeholder='juan'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
       { touched.name && errors.name && <span>{errors.name}</span>}


        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='domingues'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
       {  touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


        <label htmlFor='email'> Email</label>
        <input
          type='email'
          name='email'
          placeholder='juan@domigues.com'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {  touched.email && errors.email && <span>{errors.email}</span>}


        <button type="submit">submit</button>

      </form>
    </div>
  )
}

export default FormikBasicPage


