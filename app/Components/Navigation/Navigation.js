import React, {Component} from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";

class NavigationComponent extends Component {

    navLinks = [
        { label: 'Work', path: '/Work' },
        { label: 'About', path: '/About' },
        { label: 'Contact', path: '/Contact' }
    ];


    getNavHtml () {
        const { location } = this.props;
        return this.navLinks.map((item, i) => {
            return (<li key={i}><a  className={(location.pathname === item.path) ? 'active' : ''} href={item.path} >{item.label}</a></li>)
        });
    }

    render () {
        return (
            <header className={'NavigationComponent'}>
                <div className="container">
                    <div className="branding"><a href="/"><img src="/assets/logo.png" alt=""/></a></div>
                <nav className="main">
                    <ul>
                        { this.getNavHtml() }
                    </ul>
                </nav>
                </div>
            </header>
        );
    }
}

export default NavigationComponent;
