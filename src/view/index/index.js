import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

class Home extends Component {

    handleSwitchColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <p style={{ color:this.props.themeColor }}>
                    我的头疼头疼头疼
                </p>

                <button 
                    style={{ color:this.props.themeColor }} 
                    onClick={this.handleSwitchColor.bind(this,'blue')}>
                    blue
                </button>

            </div>
        );
    }
}

// 获取 redux 全局的 指定 state 
const mapStateToProps = (state) => {
    return {
        themeColor: state.colorReducer.themeColor
    }
}

// 设置 redux 全局的 指定 state 
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);