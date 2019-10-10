import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import childA from './components/A'
import ChildB from './components/B'
import ChildC from './components/C'
import Content from './components/content'

class Home extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div>
                home
              {/* <ChildB></ChildB>
              <ChildC></ChildC> */}
                <Content name={'王二'}></Content>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;