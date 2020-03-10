import React from 'react';


function about () {
		return(

			<div className= 'about-header-div'>
				<h2 className = "about-header">
			About Ace
			</h2>
			<ul>
			<li className='about-item'>
			
				Currently working as an Endpoint Automation Engineer at ASAPP.
			
			</li>
			<li className='about-item'>
				 This entire website has been coded using React and Redux as a fun side project
			</li>
			<li className='about-item'>
				Under the projects tab, the Droese Raney Architecture tab is a clone I built of my father's website which has since been updated. 
			</li>
			<li className='about-item'>
				The Battlefield tab is a page designed to allow you to see your stats from the game Battlefield 4. If you do not play battlefield, the user "adam45" and "nxcyin" are usernames to try. 
			</li>
			<li className='about-item'>
				The Battlefield page uses the bf4stats.com api and uses the redux store and reducers to activly modify the state of the webpage. 
			</li>
			
			</ul>
			</div>
	)
	}

	export default about;
