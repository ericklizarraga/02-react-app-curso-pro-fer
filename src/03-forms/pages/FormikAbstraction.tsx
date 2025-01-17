import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
// import { MytextInput } from '../components/MytextInput';
// import { MySelect } from '../components/MySelect';
// import { MyCheckBox } from '../components/MyCheckBox';

import { MyCheckBox,MySelect,MytextInput} from '../components'

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>FormikAbstraction</h1>

    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        terms:false,
        jobtype:''
      }}
      onSubmit={(values)=>{
        console.log({values});
      }}
      validationSchema={
        Yup.object({
          name: Yup.string()
                    .max(15,'maximo 15 caracteres')
                    .required('Requerido'),
          lastName: Yup.string()
                    .max(15,'maximo 15 caracteres')
                    .required('Requerido'),
          email: Yup.string()
                    .required('Requerido')
                    .email('no es un email valido'),
          terms: Yup.boolean()
                    .oneOf([true],'el terms es requerido'),
          jobtype:    Yup.string()
                        .notOneOf(['it-jr','esta opcion no esta disponible'])
                        .required('seleccione una opcion')
        })
      }
    >
      {
        (formik) => (
          <Form noValidate>

            <MytextInput 
              label='First name' 
              name='name' 
              placeholder='juan'
              type='text'
            />

            {/* <label htmlFor='name'>First Name</label>
            <Field
              name="name"
              placeholder='juan'
              type="text"
            />
            <ErrorMessage  name="name" component="span"/> */}
    
            <label htmlFor='lastName'>Last Name</label>
            <Field
              type='text'
              name='lastName'
              placeholder='domingues'
            />
            <ErrorMessage  name="lastName" component="span"/>
    
    
            <label htmlFor='email'> Email</label>
            <Field
              type='email'
              name='email'
              placeholder='juan@domigues.com'
            />
            <ErrorMessage  name="email" component="span"/>


            <MyCheckBox
              label='terms' 
              name='terms'
              type="checkbox"
            />

            {/* <label htmlFor='terms'> terms </label>
            <Field
              type='checkbox'
              name='terms'
              id="terms"
            />
            <ErrorMessage  name="terms" component="span"/> */}

            <MySelect label='jobtype' name='jobtype'  id="jobtype">
              <option selected disabled>pick something</option>
              <option value={"developer"}>developer</option>
              <option value={"designer"}>designer</option>
              <option value={"it-senior"}>it-senior</option>
              <option value={"it-jr"}>it-jr</option>
            </MySelect>

            {/* <label htmlFor='jobtype'> jobtype </label>
            <Field
              name="jobtype"
              as="select"
              id="jobtype"
            >
              <option selected disabled>pick something</option>
              <option value={"developer"}>developer</option>
              <option value={"designer"}>designer</option>
              <option value={"it-senior"}>it-senior</option>
              <option value={"it-jr"}>it-jr</option>
            </Field>
            <ErrorMessage  name="jobtype" component="span"/> */}
    
            <button type="submit">submit</button>
  
          </Form>
        )
      }
    </Formik>
    </div>
  )
}



