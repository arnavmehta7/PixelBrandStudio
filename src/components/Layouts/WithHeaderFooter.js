import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer'
const WithHeaderFooter = () => {
    return (
        <div>
		<Header/>
		<Outlet/>
		<Footer/>
		
	</div>
    )
}

export default WithHeaderFooter;