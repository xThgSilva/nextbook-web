import "../styles/auth.css"
import { Link } from "react-router-dom"

import { FaBookReader } from "react-icons/fa"

const Login = () => {
    return (
        <div className="auth-page-container">
            <section className="logo-section">
                <div className="logo-content">
                    <FaBookReader className="logo-icon" />
                    <h1>NextBook</h1>
                </div>
                <p className="tagline">Borrow. Buy. Explore.</p>
            </section>
            <div className="auth-container">
                <div className="form-header">
                    <h2>Welcome Back</h2>
                    <p>Good to see you again!</p>
                </div>
                <form className="auth-form">
                    <div className="input-group">
                        <label htmlFor="email-input">Your e-mail</label>
                        <input type="email" id="email-input" placeholder="myemail@email.com" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password-input">Your password</label>
                        <input type="password" id="password-input" placeholder="myemail@email.com" />
                    </div>
                    <button type="submit">Sign in</button>
                </form>
                <div className="form-footer">
                    <Link to="/forgot-password" className="link-secondary">
                        Forgot your password?
                    </Link>
                    <span className="divider">•</span>
                    <Link to="/register" className="link-secondary">
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login