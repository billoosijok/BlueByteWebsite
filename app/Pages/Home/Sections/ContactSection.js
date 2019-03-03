import React, {Component} from 'react';
import './ContactSection.scss';
import SectionComponent from "./SectionComponent";
import { siteData } from '../../../siteData';

const contactInfo = siteData.contactInfo;

class ContactSection extends Component {

    contactInfo = contactInfo;

    render() {
        return (
            <SectionComponent  className={'ContactSection'} id='contact-section' title='Get in Touch'>
                <div className="contact-items">
                    <div className="row">
                        <div className="col m6">
                            <a href={"mailto:" + this.contactInfo.email} className="contact-item"><span className="icon"><i className="fas fa-envelope"></i></span><span>{this.contactInfo.email}</span></a>
                            <a href={"tel:" + this.contactInfo.phone} className="contact-item"><span className="icon"><i className="fas fa-phone"></i></span><span>{this.contactInfo.phone}</span></a>
                        </div>
                        <div className="col m6">
                            <div className="contact-item"><span className="icon"><i className="fas fa-globe-americas"></i></span><span>{this.contactInfo.address}</span></div>
                        </div>
                    </div>
                </div>
            </SectionComponent>
        );
    }
}

export default ContactSection;
