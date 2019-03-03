import React, { Component } from 'react';
import './Home.scss';
import NavigationComponent from "../../Components/Navigation/Navigation";
import OurWorkSection from "./Sections/OurWorkSection";
import AboutUsSection from "./Sections/AboutUsSection";
import ContactSection from "./Sections/ContactSection";
// import bg from '../../assets/bg.jpg';

class HomePage extends Component {

	sections = {
		'/': '#home',
		'/Work' : "#our-work-section",
		'/About': "#about-us-section",
		'/Contact': "#contact-section"
	};

	componentDidMount() {
		const links = document.querySelectorAll('.NavigationComponent a');

		for (let i = 0; i < links.length; i++) {
			const item = links[i];
			const currentPath = item.getAttribute('href');
			item.setAttribute('href', this.sections[currentPath]);

			item.addEventListener('click', (e) => {
				e.preventDefault();
				// window.history.pushState({}, '', currentPath);
			});
		}

		makeScrollLinksAnimated();

	}

	// componentDidMount() {
		// const mediaQuery = 700;
		//
		// const background = document.querySelector('.HomePage > #bg');
		// const backgroundCords = background.getBoundingClientRect();
		//
		// var body = document.body,
		// 	html = document.documentElement;
		//
		// var height = Math.max( body.scrollHeight, body.offsetHeight,
		// 	html.clientHeight, html.scrollHeight, html.offsetHeight );
		//
		// window.addEventListener('scroll', function() {
		// 	console.log( window.pageYOffset / (height - backgroundCords.height) );
		//
		// 	if(Math.max(window.innerWidth, document.documentElement.clientWidth) > mediaQuery) {
		// 		background.style['top'] = '-' + Math.min(1000, window.pageYOffset / (height - backgroundCords.height)) + '%';
		// 	} else {
		// 		background.style['top'] = '0px';
		// 	}
		// });
	// }

	render () {
		const { location } = this.props;

		return (
			<div className={'HomePage'}>
				<header className="Home-header" id={"home"}>
					<NavigationComponent location={location}/>

					<div className="container">
						<h2 className="intro-text">
							<div><span>Lorem ipsum dolor sit amet,</span></div>
							<div><span>consectetur adipiscing elit, </span></div>
							<div><span>eiusmod tempor incididunt.</span></div>
						</h2>
					</div>
				</header>
				<main className='Home-main'>
					<OurWorkSection />
					<AboutUsSection />
					<ContactSection />
				</main>
			</div>
		);
	}
}

export default HomePage;

function makeScrollLinksAnimated() {

	// This shall select any anchor tag that presumably is trying to
	// link to an element in the same page, because it starts with '#'

	var scrollLink = document.querySelectorAll("a[href^='#']");
	// Modifying the click event of each of them.
	for (var i = 0; i < scrollLink.length; i++) {
		scrollLink[i].addEventListener('click', function(e) {
			// This is to prevent paganation
			if(e.target.nodeName === "A") {
				e.preventDefault();

				// Selecting the scroll target element based on the
				// link that is in the clicked 'a' element.
				var scrollTargetId = e.target.getAttribute('href');
				var scrollTarget = document.querySelector(scrollTargetId);

				if ( ! scrollTarget ) {
					return;
				}

				// Getting the offset of the target-element in relation to the top
				// of the page ..
				// getBoundingClientRect().top only gets the position of
				// the element in relation to the window. So we calculate
				//  the difference

				var bodyMargin = window.getComputedStyle(document.body, null).getPropertyValue('margin-top');
				var bodyOffset = document.body.getBoundingClientRect().top;
				var targetOffset = scrollTarget.getBoundingClientRect().top;
				var positionY =  targetOffset - bodyOffset;

				// Finally calling the glorious function the does the scrolling.
				scrollY(positionY, 300);

				// Just to update the address bar.
				window.location.hash = scrollTargetId;
			}
		});

	}

}

function scrollY(targetOffset, duration) {

	// Giving it a default value, in case it wasn't present.

	duration = duration || 500;

	// The distance between the target pageOffset and the current
	// pageOffset of the page/scrollbar

	var currentOffset = window.pageYOffset;
	var distance = targetOffset - currentOffset;

	// The start time of the animation .. Needed to calculate the progress
	// in the animator function;

	var start = null;

	function animator(timestamp) {

		if(!start) start = timestamp;

		var progress = timestamp - start;

		if (progress < duration) {

			// Eplaining what's happening here:
			// if {progress} = 500, {duration} = 1000.
			// (progress/duration) = 0.5 * distance = half_the_distance.
			//
			// So eventually progress = 1000. and (progress/duration) = 1.
			// so the distance will eventually be {distance * 1} .. Get it?

			var newOffset = currentOffset + (Math.sqrt((progress/duration),0.6) * distance);
			window.scrollTo(0, newOffset);

			// This will call the animator function 30 times per second (Sometimes 60)
			// also it passes the current timestamp everytime. So you can see how
			// {progress} updates.
			requestAnimationFrame(animator);
		} else {
			// If the progress goes over the duration, it means we're done
			// so we jst jump to the target. Just in case!
			window.scrollTo(0, targetOffset)
		}
	}

	// Initial call
	requestAnimationFrame(animator)

}