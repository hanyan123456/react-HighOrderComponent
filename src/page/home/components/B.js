// B/index.js

import React from 'react';
import A from './A';


class B extends React.Component {
    render() {
        return (
            <div className="wrap">
                dddddddddddd
            </div>
        );
    }
}

export default A(B);
