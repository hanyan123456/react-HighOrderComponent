import React from 'react';
import A from './A';


class C extends React.Component {
    render() {
        return (
            <div className="wrap">
                CCCCCCCCCCCCCCC
            </div>
        );
    }
}

export default A(C);