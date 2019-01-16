import React, { Component } from 'react';

class StepComponent extends Component {
    state = {   
    };

    render() { 
        return ( 
            <div className="card has-background-warning">
                <div className="card-content has-text-centered">
                    <p className="title is-3">
                        {this.props.step}
                    </p>
                    <span className="icon is-large">
                        <i className={"fas fa-" + this.props.icon + " fa-2x"}></i>
                    </span>
                    
                    <p className="title is-4">
                        {this.props.title}
                    </p>
                    
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item has-text-centered">
                    <span>
                        {this.props.subtitle}
                        
                    </span>
                    </p>
                </footer>
                </div>
        );
    }
}
 
export default StepComponent;