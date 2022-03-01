import {Outlet} from 'react-router-dom';

const NoHeaderFooter = ()=>{
return(
	<div>
		<Outlet/>
	</div>
)
}

export default NoHeaderFooter;