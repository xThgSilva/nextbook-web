import Auth from "../components/Auth"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <Auth
                formTitle={"Welcome back"}
                auxiliaryText={"Good to see you again!"}
                childrenLinks={<>
                    <Link to="/forgot-password" className="link-secondary">
                        Forgot your password?
                    </Link>
                    <span className="divider">•</span>
                    <Link to="/register" className="link-secondary">
                        Create an account
                    </Link>
                </>}
                submitButtonText="Sign in">
                <div className="input-group">
                    <label htmlFor="email-input">Your e-mail</label>
                    <input type="email" id="email-input" placeholder="myemail@email.com" />
                </div>
                <div className="input-group">
                    <label htmlFor="password-input">Your password</label>
                    <input type="password" id="password-input"/>
                </div>
            </Auth>
        </>
    )
}

export default Login