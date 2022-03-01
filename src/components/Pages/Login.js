import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import LOGO from '../../assets/images/logo-pixel.png'
const Login = () => {
	return (
		<div>
			<div className="login-main">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="login-left-section">
								<div className="left">
									<Link className="navbar-brand logo-text" to="/">
										<img src={LOGO} />
									</Link>
								</div>
								<div className="left-inner-content">
									<h4><span>Login with your</span> Account</h4>
									<p>or create a new account for free</p>
									<p><Link to="/signup">sign up</Link></p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="right-login-conent">
								<h2>Login To Your Account</h2>
								<ul>
									<li className="iconne">
										<a href="#">
											<FontAwesomeIcon size="2x" className=" pt-2 " icon={faFacebookF} aria-hidden="true">
											</FontAwesomeIcon>
										</a>
									</li>
									<li className="iconne">
										<a href="#">
											<FontAwesomeIcon size="2x" color='red' className="pt-2" icon={faGooglePlusG} aria-hidden="true">
											</FontAwesomeIcon>
										</a>
									</li>

								</ul>
								<span className="or">or</span>
								<div className="log-in-form left">
									<form>
										<div className="mb-3">
											<label className="form-label">
												<FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} aria-hidden="true"></FontAwesomeIcon> Email</label>
											<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

										</div>
										<div className="mb-3">
											<label className="form-label">
												<FontAwesomeIcon icon={faLock} className="fa fa-lock" aria-hidden="true"></FontAwesomeIcon>
												Password</label>
											<input type="password" className="form-control" id="exampleInputPassword1" />
										</div>
										<div className="mb-3 form-check">
											<input type="checkbox" className="form-check-input" id="exampleCheck1" />
											<label className="form-check-label" >Remember me</label>
											<a href="#" className="forget">Forgot your password?</a>
										</div>
										<div className="submit-btn">
											<button type="submit" className="btn btn-primary">Log in</button>
										</div>
										<div className="rotate-log">
											<h2>Log in</h2>
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

export default Login;