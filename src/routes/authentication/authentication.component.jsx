import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss';

const Authentication = () => {

    // *************** //
    // Redirect Method //
    // *************** //
    // useEffect(() => {
    //     const getResponse = async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getResponse()
    // }, [])

    return (
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;