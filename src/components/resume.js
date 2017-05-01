import React from 'react';
import {Link} from 'react-router'
import resumepdf from '../assets/resumepdf.pdf'



function resume () {
		return(

			<div className= 'about-header-div'>
				<h2 className = "about-header">
			Resume
			</h2>
			<p className="about-item"> Download my resume in PDF form: </p> <a id="resume-link" href={resumepdf} download>Resume</a>
			
			</div>
	)
	}

	export default resume;