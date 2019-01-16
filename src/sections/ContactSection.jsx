import React, { Component } from 'react';

class ContactSection extends Component {
    state = {
        
    };

    render() {
        return (
            <div>
                <section className="section has-background-yellow is-small has-text-black-ter">
                    <h1 className="title is-4 is-size-5-mobile has-text-left">Contacto</h1>
                    <p><i className="fas fa-envelope"></i> saitc.pueblagmail.com </p>
                    <p><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/SAITCPuebla/">SAITC Puebla</a> </p>
                </section>
            </div>
        );
    }
}

export default ContactSection;