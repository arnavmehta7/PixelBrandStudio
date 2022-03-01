import HOME from "../../../assets/images/home.svg";
import VID from "../../../assets/video/video/Upwork Ahmady.mp4";
const HowItsWorks=()=>{
	return(
	<div className="how-it-work-section">
        <div className="container-fluid">
          <div className="head head-home bg-white">
            <h3 className="">
              <span>How</span> Its Work
            </h3>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="video-section text-align-center">
                <img
                  data-toggle="modal"
                  data-target="#exampleModal"
                  src={HOME}
                />
              </div>
            </div>
          </div>
        </div>
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close video-pause-btn" data-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div className="modal-body vid-pop">
            <video width="320" height="430" controls>
                            <source src={VID} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
                    </div>
                </div>
            </div>
        </div>

      </div>




     )
}

export default HowItsWorks;