// A/index.js
import React from 'react';
// 高阶组件 
//高阶组件就是接收一个组件作为参数，然后返回一个新的组件。高阶组件其实是一个函数，并不只是一个组件。
// 定义一个函数
// 传入一个组件作为参数
function A(WrappedComponent) {
    // 返回一个组件
    return class A extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        render() {
            return (
                <div className="a-container">
                    <div className="header">
                        <div className="title">提示</div>
                        <div className="close">X</div>
                    </div>
                    <div>
                        <WrappedComponent />
                    </div>
                </div>
            )
        }
    }
}

// 抛出函数
export default A
