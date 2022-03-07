// import { useEffect } from 'react';
import IMG from '../../assets/images/line.jpg'

const Terms = () =>{
	window.scrollTo(0, 0)
	// console.log('use Effected')
return(

<div className='terms-container'>
    <section className="contactbar terms-block">
	    <div className="container">
	        <h4><img src={IMG} />GENERAL</h4>
	        <h2>Terms and <br/>Conditions</h2>
	    </div>
	</section>
	<section className="terms-content">
	    <div className="container left termss">
	        <h4>Preamble</h4>
	        <p>
	        	Pixelbrandstudio is operated by Kaleido AI GmbH which ensures the provision of the online software service. <br/>
		        The Subject of the Contract<br/>
				1. The object of the Contract grants you a temporary, revocable, and non-exclusive use of the software following the terms of the agreement. <br/>
				2.  Customers must have a stable internet connection for the smooth functioning of the online software. Additional information about the operating systems supported by the software can be found at <a href="#">http://pixelbrandstudio.com/pricing</a> <br/>
				3. The act of using multiple accounts by the same person is strictly unpermitted. <br/>
				4. Customers are obligated to refrain from performing actions that could potentially harm the software and disrupt its smooth functionality. One is strictly prohibited from hacking into the system and running software scans, bypassing security systems, or obtaining unauthorized access to any data. <br/>
			</p>

	        <h4>Rights of Use</h4>

	        <p>
	        	1. Pixelbrandstudio grants a limited license applicable throughout the contract to use the software to the extent of the selected variant worldwide or its use. <br/>
				2. Depending on the personal choice of tariff, the customer shall use the software for either commercial or non-commercial purposes. The latter use of our service for explicit or implicit commercial motives is prohibited. <br/>
				3. Under no circumstances should our service be disclosed and transferred to third parties that are not affiliated with us. <br/>
				4. Customers are advised to use Paddle (paddle.com) for billing. Paddle is responsible for the record of all our orders and manages customer queries as well. <br/>
				5. Customers have a right to process as many images as their credits allow. A photo is considered processed when the option to download appears (regardless of whether the user saves the photo or not). Anyone making more than 15% unsuccessful requests shall be immediately blocked access to the service. <br/>
				6. The agreement shall remain in effect unless and until the customer wishes to withdraw consent, which can only be done 30 days prior to the date of the contract. However, if the customer has made use of the services even in part, the Operator cannot grant a withdrawal.<br/>
				7. The Operator may grant the customer an API Interface that enables them to incorporate the software into unlimited third party websites and services. However, the fusion of the software into third-party services is only possible if the Customer holds a legal binding to the respective third party software.<br/>
				8. The website shall not be used for encouraging hate crimes, unlawful activities, or attacks on the grounds of race, religion, sex, gender, sexual orientation, disability, etc.
			</p>
	        

	        <h4>Terms of Payment</h4>

	        <p>
	        	1. Your subscription cycle commences the day you commit to your plan. Depending on its specifics, your plan offers a certain number of images per period.<br/>
	        	2. Unless stated otherwise in the description of the services, the activation of the service by the Operator will happen as soon as the complete invoice amount is credited to its account.
	        </p>

			<h4>Disclaimer</h4>
			<p>
				We are not responsible for any content, code, or other imprecision. In no event shall we be liable for any special, direct, or indirect, consequential, or incidental damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the service or the contents of the service. We reserve the right to make deletions, additions, or modifications to the contents of the service at any time without prior notice.
			</p>

	    </div>
	</section>
</div>
)

}

export default Terms;