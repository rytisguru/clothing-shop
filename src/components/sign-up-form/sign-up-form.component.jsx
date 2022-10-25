import { useState } from "react";
import { useDispatch } from 'react-redux';
import { emailSignUpStart } from './../../store/user/user.action';

import FormInput from './../form-input/form-input.component';
import Button from './../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            dispatch(emailSignUpStart(email, password, displayName))
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log("User creation failed", error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    name="displayName"
                    type="text"
                    required
                    onChange={handleChange}
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <Button buttonType={"inverted"} type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;