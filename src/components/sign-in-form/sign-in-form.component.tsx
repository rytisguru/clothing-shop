import { useState, FormEvent, ChangeEvent } from "react";
import { Auth, AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
    SignInContainer,
    ButtonsContainer
} from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const dispatch = useDispatch()

    const signInWithGoole = () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            dispatch(emailSignInStart(email, password))
            setFormFields(defaultFormFields)
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD
                || (error as AuthError).code === AuthErrorCodes.INVALID_EMAIL) {
                alert("Wrong Email or Password.")
            }
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your Email and Password or Google Account</span>
            <form onSubmit={handleSubmit}>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoole}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;