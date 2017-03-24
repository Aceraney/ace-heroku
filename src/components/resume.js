import React from 'react';
import {Link} from 'react-router'
import resumepdf from '../assets/resumepdf.pdf'

function resume () {
		return(

			<div className= 'about-header-div'>
				<h2 className = "about-header">
			Resumee
			</h2>
			<p> Download my resume in PDF form: </p> <a href={resumepdf} download>Resume</a>
			
			</div>
	)
	}

	export default resume;