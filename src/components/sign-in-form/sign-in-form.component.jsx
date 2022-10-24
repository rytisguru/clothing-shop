import { useState } from "react";
import FormInput from './../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from './../button/button.component';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoole = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/wrong-password'
                || error.code === 'auth/user-not-found') {
                alert("Wrong Email or Password.")
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
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
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={"google"} onClick={signInWithGoole}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;