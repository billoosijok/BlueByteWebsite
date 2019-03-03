import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './OurWorkSection.scss';
import SectionComponent from "./SectionComponent";
import { siteData } from '../../../siteData';

const workItems = siteData.work;

class OurWorkSection extends Component {

	render() {
		return (
			<SectionComponent className={'OurWorkSection'} id='our-work-section' title='Our Work'>
				<OurWorkGrid items={workItems} />
			</SectionComponent>
		);
	}
}

class OurWorkGrid  extends Component {

	makeItems (  ) {
		const { items } = this.props;

		return items.map ( (item, i) =>
			<li className='grid-item' key={i}>
				<NavLink to={'/OurWork/' + item.id}><img src={item.image} alt=""/></NavLink>
			</li>
		);
	}

	render() {
		return (
			<ul className="grid-items">
				{ this.makeItems() }
			</ul>
		);
	}
}

export default OurWorkSection;
