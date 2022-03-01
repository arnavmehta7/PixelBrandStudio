import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/images/logo-pixel.png'
const Signup = () => {
    return (
        <div>
            <div className="sign-up-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-left-section">
                                <div className='left'>
                                    <Link className="navbar-brand logo-text" to="/">
                                        <img src={LOGO} />
                                    </Link>
                                </div>
                                <div className="left-inner-content">
                                    <h4><span>Sign up to <br />create your </span><br /> Account</h4>
                                    <p>or login if already have an account</p>
                                    <a href="/login">log in</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-login-conent left">
                                <h2>Create an Account</h2>
                                <ul>
                                    <li className='iconne text-center'><a href="#">
                                        <FontAwesomeIcon size='2x' className=" pt-2" icon={faFacebookF} aria-hidden="true">

                                        </FontAwesomeIcon>
                                    </a>
                                    </li>
                                    <li className='iconne text-center'>
                                        <a href="#"><FontAwesomeIcon size="2x" color='red' className="pt-2" icon={faGooglePlusG} aria-hidden="true">
                                        </FontAwesomeIcon></a>
                                    </li>
                                </ul>	<span className="or">or</span>
                                <div className="log-in-form">
                                    <form method="POST" action="">

                                        <div className="mb-3">
                                            <label className="form-label">
                                                <FontAwesomeIcon className='pr-2' icon={faEnvelope} aria-hidden="true">

                                                </FontAwesomeIcon>
                                                Email
                                            </label>
                                            <input id="email" type="email" className="form-control" name="email"  required autoComplete="email" />


                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                <FontAwesomeIcon className='pr-2' icon={faLock} aria-hidden="true">

                                                </FontAwesomeIcon>
                                                Password
                                            </label>
                                            <input id="password" type="password" className="form-control" name="password" required autoComplete="new-password" />


                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                <FontAwesomeIcon className='pr-2' icon={faLock} aria-hidden="true">

                                                </FontAwesomeIcon>
                                                Confirm Password
                                            </label>
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autoComplete="new-password" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" name="terms" id="terms-condition" required />
                                            <label className="form-check-label" >
                                                I agree to the 
                                                <a href="/terms" target="_blank"> terms of services, general terms
                                                </a> and conditions and
                                                <a href="/terms" target="_blank"> privacy policy.
                                                </a>
                                            </label>

                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" name="notification" className="form-check-input" id="notify" />
                                            <label className="form-check-label">Notify me about new features and special offers.</label>
                                        </div>
                                        <div className="submit-btn">
                                            <button type="submit" className="btn btn-primary">Sign up</button>
                                        </div>
                                        <div className="rotate-log sign-up">
                                            <h2>sign up</h2>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Signup;