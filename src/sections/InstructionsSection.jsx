import React, { Component } from 'react';
import StepComponent from '../components/StepComponent';

class InstructionsSection extends Component {
    state = {
        
    };

    render() {
        return (
            <div>
                <section className="section has-background-main">
                    <br/><h2 className="title is-2 is-size-3-mobile has-text-centered has-text-white-ter">Cómo <strong className="has-text-warning">inscribirte</strong></h2>
                    <p className="subtitle is-5 has-text-centered marginTop has-text-white-ter">Sigue los sencillos pasos</p>

                    <div className="container">
                        <div className="columns marginTop">
                            <div className="column">
                                <StepComponent title="Busca tu equipo de 4 personas." subtitle="Si necesitas ayuda, ¡contáctanos!" icon="users" step="1"/>
                            </div>
                            <div className="column">
                            <StepComponent title="Inscríbete a partir del 31 de enero." subtitle="Actualizaremos nuestra página constantemente." icon="user-edit" step="2"/>
                            </div>
                            <div className="column">
                            <StepComponent title="¡Asiste a Hack Puebla el 29 de marzo y diviértete!" subtitle="¡Habrá muchos premios y actividades!" icon="calendar-check" step="3"/>
                            </div>    
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default InstructionsSection;