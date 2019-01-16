import React, { Component } from 'react';

class HeroSection extends Component {
    state = {
        
    };

    render() {
        return (
            <div>
                <section className="hero is-dark-theme is-large">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title has-text-white is-1">
                                        Hack Puebla
                                    </h1>
                                    <h2 className="subtitle has-text-white">
                                        Imagina. Piensa. Crea.
                                    </h2>
                                    <h2 className="subtitle has-text-white">
                                        29 y 30 de marzo<br/>del 2019
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HeroSection;
