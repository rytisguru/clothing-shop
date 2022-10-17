import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password == confirmPassword) {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log(response)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    name="displayName"
                    type="text"
                    required
                    onChange={handleChange}
                    value={displayName} />
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={email} />
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                    value={password} />
                <label>Confirm password</label>
                <input
                    name="confirmPassword"
                    type="password"
                    required
                    onChange={handleChange}
                    value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;