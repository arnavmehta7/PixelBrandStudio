import HowItsWorks from './SmComponents/HowItsWorks';
import Testimonial from './SmComponents/Testimonial';
import {useDropzone} from 'react-dropzone';
import StunningQuality from './SmComponents/StunningQuality'
const Home = () => {
  
  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (

    <div> 
{/*This is the first-part after Home*/}
      <div className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-right-text">
                <h4>Easily Remove </h4>
                <h2>
                  Background <br /> from image
                </h2>
                <h5>Powerful Background Remover</h5>
              </div>

              <div className="right-bottom">
                <p>Paste image or URL</p>
                <ul>
                  <li className="bc-light">ctrl</li>
                  <li>+</li>
                  <li className="bc-light">V</li>
                </ul>
              </div>
              <div className="right-bottom-img">
                <p>
                  No image?
                  <br />
                  Try one of these
                </p>
                <p></p>
                <ul className="right-bottom-images"></ul>
                <p></p>
              </div>
              <div>
                <p className="tagline-bottom">
                  By using our service, you hereby consent to our Terms of
                  Service. The site is ensured protection by its Privacy Policy
                  and ReCaptcha.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-upload  ">
            {/* dropzone dz-clickable home-dropzone id='dropzone' */}
                {/*<form
                  className="dropzone dz-clickable home-dropzone"
                  id="dropzone">
                  {" "}
                  <input
                    type="hidden"
                    name="_token"
                    value="YqLdP6jpFURzfqqXXCjX3m6VS29Gs0k4eegd1wmg"
                  />
                  <input type="hidden" name="formpage" value="home" />
                  <div className="dz-default dz-message">
                    <button className="dz-button" type="button">
                      Drop files here to upload
                    </button>
                  </div>
                </form>*/}
                <div className="Drop">
                  <div {...getRootProps({className: 'dropzone  dz-clickable home-dropzone'})}>
                  <input {...getInputProps()} />
                  <div className="dz-default dz-message">
                    <button className="dz-button" type="button">
                      Drop files here to upload
                    </button>
                  </div>
                  </div>

                  <aside>
                  <ul>{files}</ul>
                  </aside>
                </div>





              </div>
            </div>
          </div>
        </div>
      </div>


 {/*The Second Part*/}
{/* The Clickable is not done yet */}
		<HowItsWorks/>
  {/*Done */}


{/* FEATURE */}
    <div className="background-text">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="back-inner-content">
                        <h6 className='lft'>Remove backgrounds 100% <br/>
                    automatically in 5 seconds</h6>
                        <h3 className='lft'>With Zero Clicks</h3>   
                        <p className='lft'>Pixelbrandstudio is an AI-operated online tool that focuses on identifying images through advanced computer vision algorithms.</p>
                        <p className='lft'>It works to separate the foreground pixels from the backdrop with striking accuracy.</p>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>       
    </div>


{/* Stunning Quality -- Start*/}
<StunningQuality/>



{/*Testimonial -- Start*/}
<Testimonial/>

      
    </div>
  );

};

export default Home;