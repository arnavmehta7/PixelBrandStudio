import {Link} from 'react-router-dom'
import logo_pixel from "../../assets/images/logo-pixel.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faLinkedin,faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = ()=>{
return(

<div className="footer-section">
		<input type="hidden" id="footer-token" value="{{ csrf_token() }}"/>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="first-widget">
							<Link className="navbar-brand logo-text" to="/">
							<img className="logo-img-footer" src={logo_pixel}/></Link>
						</div>
					</div>
					<div className="col-md-3">
						<div className="widget-second">
							<h4>Support</h4>
							<ul>
								<li><Link to="/terms">Terms &amp; Conditions</Link>
								</li>
								<li><Link to="/privacy-policy">Privacy Policy</Link>
								</li>
								<li><Link to="/cancellation-policy">Cancellation Policy</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="user-links">
							<ul>
								<li><Link to="/contact">Contact us</Link>
								</li>
								<li><Link to="/aboutus">About us</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-2">
						<div className="social-meadia">
							<ul>
								<li><Link to="/#" target="_blank" id="fb-url-1">
									<FontAwesomeIcon style={{color:'white'}} icon={faFacebookF} size='2x' />
								</Link>
								</li>
								<li><Link to="/#" target="_blank" id="twitter-url-1">
								<FontAwesomeIcon style={{color:'white'}} size='2x' icon={faTwitter} />

								</Link>
								</li>
								<li>
								<Link to="/#" target="_blank" id="linkedin-url-1">

									<FontAwesomeIcon style={{color:'white'}} size='2x' icon={faLinkedin}/></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="copy-right">
				<p>Copyright 2019-2021 <span>Pixelbrandstudio</span>. All right reserved.</p>
			</div>
		</div>




)

}

export default Footer;