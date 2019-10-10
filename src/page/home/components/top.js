// 操作props
import React from 'react';

// 这里我们返回一个匿名函数，接收传递得值
export default (title = '我是标题') => {
    // 然后返回一个函数，这个函数接收子组件 
    return (WrappedComponent) => {
        // 返回我们的外部组件
        return class Top extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    value: ''
                };
            }
            // refs
            handleClick = () => {
                this.wref.getName();
            }
            // 抽取状态
            handleOnInputChange = (e) => {
                console.log(e.target.value)
                this.setState({
                    value: e.target.value
                })

            }
            render() {
                // const prop = this.props;
                // console.log(prop)
                // 抽取状态
                var newProps = {
                    value: this.state.value,
                    onInput: this.handleOnInputChange
                }
                return (
                    <div className="a-container">
                        <div className="header">

                            <div className="title">{title}</div>
                            <div className="close">X</div>
                        </div>
                        <div>
                            <WrappedComponent ref={(v) => this.wref = v} sex={'女'}{...this.props}{...newProps} />
                        </div>
                        <div>
                            <button onClick={this.handleClick}>获取名字</button>
                        </div>
                    </div>
                )
            }
        }
    }
}