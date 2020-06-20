import React, { Component } from 'react';
import Typed from 'react-typed';

class Typedjs extends Component {
    render () {
        return (
            <span>
                <Typed
                    loop
                    backSpeed={50}
                    strings={[
                        'Auditable',
                        'Verifiable',
                        'Secure',
                        'Scalable']}
                    typeSpeed={40}
                />
            </span>
        );
    }
}

export default Typedjs;
