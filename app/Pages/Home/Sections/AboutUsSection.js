import React, { Component } from 'react';
import SectionComponent from "./SectionComponent";
import './AboutUsSection.scss';

import { siteData } from '../../../siteData';

class AboutUsSection extends Component {

	people = siteData.people;

	getPeople () {
		return this.people.map ( (person, i) => {
			return (
				<div className="person row" key={i}>
					<div className="person-id col s4 m6">
						<div className="person-image"><img src={'/assets/' + person.image} alt=""/></div>
						<h4 className="person-name">{person.name}</h4>
						<h6 className="person-title">{person.title}</h6>
					</div>
					<p className="person-description col s8 m6">{person.description}</p>
				</div>
			);
		} );
	}

	render() {
		return (
			<SectionComponent className={'AboutUsSection'} id='about-us-section' title='About Us'>
				<div className="people">
					{this.getPeople() }
				</div>
				<div className="dev-stack">
					<h2>Our Stack</h2>
					<ul className='technologies-list'>
						<li><img id='node-logo' src="./assets/node.svg" alt=""/></li>
						<li><img src="./assets/angular.svg" alt=""/></li>
						<li><img id="sw-logo" src="./assets/sw.svg" alt=""/></li>
					</ul>
				</div>
			</SectionComponent>
			);
	}
}

export default AboutUsSection;
