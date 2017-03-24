import React from 'react';


function about () {
		return(

			<div className= 'about-header-div'>
				<h2 className = "about-header">
			About Ace
			</h2>
			<ul>
			<li className='about-item'>
			
				Currently working as a Systems Administrator, but has recently finished the classes equivilant to a B.S. in Computer Science.
			
			</li>
			<li className='about-item'>
				An up and coming front-end/full stack developer who enjoys learning and making things. This entire website has been coded using React and Redux.
			</li>
			<li className='about-item'>
				Under the peojects tab, the Droese Raney Architecture tab is a clone I built of my father's website using React and Redux. 
			</li>
			<li className='about-item'>
				The Battlefield tab is a page designed to allow you to see your stats from the game Battlefield 4. If you do not play battlefield, the user "adam45" and "nxcyin" are usernames to try. 
			</li>
			<li className='about-item'>
				The Battlefield page uses the bf4stats.com api and uses the redux store and reducers to activly modify the state of the webpage. The "Save" button adds the user to the database and can be viewed again later. (WIP)
			</li>
			
			</ul>
			</div>
	)
	}

	export default about;