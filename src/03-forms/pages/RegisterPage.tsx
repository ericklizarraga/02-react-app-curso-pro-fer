import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';
import useForm from '../hooks/useForm';

export const RegisterPage = () => {

    const { onChange, formData,reset } = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { email, name, password, password2 } = formData;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);

    }

    return (
        <div>
            <h1>Register page</h1>

            <form action="" noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    name='name'
                    onChange={onChange}
                />

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    name='email'
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    name='password'
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="repeat password"
                    value={password2}
                    name='password2'
                    onChange={onChange}
                />

                <button type="submit">create</button>
                <button type="button" onClick={reset}>reset</button>
            </form>
        </div>
    )
}

export default RegisterPage
