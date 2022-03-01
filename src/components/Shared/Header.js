import {Route,Routes,Link} from 'react-router-dom';
import logo_pixel from '../../assets/images/logo-pixel.png';
const Header = () =>{
	// const backgroundNav = {backgroundColor:'#000'} No Need it is working with image
	return(
		<nav className="navbar navbar-expand-lg navbar-light nav-bg"
			>
	
			
			<div className="container"> 
				<Link className="navbar-brand logo-text" to='/'><img className="logo-img" src={logo_pixel}/>
				</Link>
			{/* here to="/" is for home page*/}
			
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{/*I have to create now
					/ecommerce, /upload, /login
					*/}
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"> 
							<Link className="nav-link active" aria-current="page" to="/ecommerce">How to use</Link>
						</li>
						<li className="nav-item"> 
							<Link className="nav-link" to="/pricing">Pricing</Link>
						</li>
						<li className="nav-item remove-button"> 
							<Link className="nav-link" to="/upload">Remove Background</Link>
						</li>
						
					        <li className="nav-item login-button">
								<Link className="nav-link" to="/login">Login/Signup
								</Link>
							</li>
					        
					</ul>

				{/*Here i am suspecting some issue, that all items are centered*/}


				</div>

			</div>


		</nav>

	)

}



export default Header;