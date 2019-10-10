
import React from 'react';
import Top from './top';

class content extends React.Component {
    // 调用top中的方法
    getName = () => {
        console.log('获取name')
    }
    render() {
        return (
            <div className="wrap">
                content
                我的性别：{this.props.sex}
                我的名字：{this.props.name}
                <input type='text' defaultValue={this.props.value} onInput={this.props.onInput} />
            </div>
        );
    }
}

export default Top('关闭')(content);
