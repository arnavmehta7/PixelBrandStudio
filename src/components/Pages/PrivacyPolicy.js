import IMG from "../../assets/images/line.jpg";
const PrivacyPolicy = () => {
	window.scrollTo(0, 0)
  return (
    <div>
      <section className="contactbar terms-block">
        <div className="container">
          <h4>
            <img src={IMG} />
            GENERAL
          </h4>
          <h2>Privacy Policy</h2>
        </div>
      </section>
      <section className="terms-content">
        <div className="container privacy" >
          <h4>Privacy Policy</h4>
          <p className=''>
            At Pixelbrandstudio, one of our main priorities is the privacy of
            our visitors. This Privacy Policy document contains types of
            information collected and recorded by Pixelbrandstudio and its use.{" "}
          </p>

          <p>
            Your images are yours. When you upload images to Pixelbrandstudio,
            we save them temporarily to our servers to process them, then they
            are deleted then from our data forever. We do not disclose, share,
            or trade your personal information to any third parties unless you
            explicitly provide us with permission to do so. We will not sell or
            transfer your images to others, except if we're asked to do so as
            part of the services.
          </p>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the images that
            they shared and collect on Pixelbrandstudio. This policy does not
            apply to any information collected offline or via channels other
            than this website.
          </p>

          <h4>Information We Collect:</h4>
          <p>
            We don't require personal information for the use of our website. If
            you create an account, you can access your information through a
            password and ID created by you. We recommend that you do not divulge
            your password to anyone.{" "}
          </p>

          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. We
            retain personal data as long as we need it for the purposes for
            which it was obtained or until you ask to delete it.{" "}
          </p>

          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>

          <h4>How We Use Your Information:</h4>
          <p>
            We use the information we collect in various ways, including to:{" "}
            <br />
            <ul className="privacy-policy-sub">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
            </ul>
          </p>
          <p>
            Pixelbrandstudio follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this as part of hosting services' analytics. The
            information collected by log files includes internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any personally identifiable information. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>

          <h4>Cookies:</h4>
          <p>
            Like any other website, Pixelbrandstudio uses 'cookies. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>

          <h4>Advertising Partners Privacy Policies:</h4>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Pixelbrandstudio.
          </p>
          <p>
            Third-party ad servers or ad networks use technologies like cookies,
            JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on Pixelbrandstudio, which are
            sent directly to users' browsers. They automatically receive your IP
            address when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize
            the advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that Pixelbrandstudio has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>

          <h4>Third Party Privacy Policies:</h4>
          <p>
            Pixelbrandstudio's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt out of certain options.
          </p>
          <p>
            You can choose to disable cookies through your browser options. To
            know more detailed information about cookie management with specific
            web browsers, it can be found at the browsers' respective websites.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
