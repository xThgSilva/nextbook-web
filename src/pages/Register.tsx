import Auth from "../components/Auth"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <Auth
            formTitle="Be Welcome"
            auxiliaryText={null}
            childrenLinks={<>
                <Link to="/login" className="link-secondary">
                    Already have an account? Sign in
                </Link>
            </>}
            submitButtonText="Create">
            <div className="input-group">
                <label htmlFor="name-input">Your name</label>
                <input type="text" id="name-input" placeholder="Enter your name" />
            </div>
            <div className="input-group">
                <label htmlFor="email-input">Your e-mail</label>
                <input type="email" id="email-input" placeholder="myemail@email.com" />
            </div>
            <div className="age-phone-group">
                <div className="input-group">
                    <label htmlFor="age-input">Your age</label>
                    <input type="number" id="age-input" min={0} max={90} />
                </div>
                <div className="input-group">
                    <label htmlFor="phone-input">Your phone</label>
                    <input type="tel" id="phone-input" placeholder="(00) 00000-0000" />
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="password-input">Your password</label>
                <input type="password" id="password-input" placeholder="Create a password" />
            </div>
        </Auth>
    )
}

export default Register