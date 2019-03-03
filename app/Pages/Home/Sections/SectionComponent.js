import React, { Component } from 'react';
import {Waypoint} from 'react-waypoint';

class SectionComponent extends Component {

	title = this.props.title;
	id = this.props.id;
	className = this.props.className;

	constructor (props ) {
		super( props );
		this.state = {
			entered: false
		}
	}

	render() {
		return (
			<Waypoint topffset={'90%'} onEnter={this._handleWaypointEnter.bind(this)}>
				<section data-entered={this.state.entered} className={this.className} id={this.id}>
					<div className="container">
						<h2 className="section-title">{this.title}</h2>
						<div className="section-content">
							{this.props.children}
						</div>
					</div>
				</section>
			</Waypoint>
		);
	}

	_handleWaypointEnter ( el ) {
		this.setState({ entered: true });
	}
}

export default SectionComponent;
