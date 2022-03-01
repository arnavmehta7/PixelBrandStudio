import { useDropzone } from 'react-dropzone';

const Upload = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
    ));


    return (

        <div>
<section className="contactbar terms-block">
	    <div className="container">
	        <h2>Upload</h2>
	    </div>
	</section>

<section className="upload-content">
{/*
	    <div className="main-uploader">
	    	<form action="" className="dropzone dz-clickable" id="dropzone" enctype="multipart/form-data">
    			<input type="hidden" name="_token" value=""/>
    			<input type="hidden" name="formpage" value="upload"/>
  			<div className="dz-default dz-message">
	  			<button className="dz-button" type="button">Drop files here to upload
	  			</button>
  			</div>
  			</form>
		</div>

*/}


  		 <div className="main-uploader-drop">
			<div {...getRootProps({className: 'my-5 dz-clickable'})}>
				<input {...getInputProps()} type='hidden'/>
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




	        <div className="file-upload-wrapper">
			  	<div className="container">
			  		<div className="upload-preview" id="upload-preview">
		  			</div>
			  	</div>
			</div>
</section>

<section className="upload-bottom">
		<div className="content">
			<p className="info">Don't forget to download your files. They will be discarded automatically after 60 minutes.</p>
		</div>
</section>


</div>
    )
}


export default Upload;