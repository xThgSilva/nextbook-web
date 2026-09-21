import "../styles/auth.css"
import { FaBookReader } from 'react-icons/fa'

type AuthProps = {
  formTitle: string;
  auxiliaryText: string | null;
  children: React.ReactNode;
  submitButtonText: string;
  childrenLinks: React.ReactNode;
}

const Auth = ({ formTitle, auxiliaryText, children, submitButtonText, childrenLinks }: AuthProps) => {
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
          <h2>{formTitle}</h2>
          {auxiliaryText && <p>{auxiliaryText}</p>}
        </div>
        <form className="auth-form">
          {children}
          <button type="submit">{submitButtonText}</button>
        </form>
        <div className="form-footer">
          {childrenLinks}
        </div>
      </div>
    </div>
  )
}

export default Auth