import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

class Mines extends Component {
    render() {
        return (
            <div className='regist' >
                <div className='regist-box' >
                    <form action="">
                        <div className="item username">
                            <input type="text" placeholder='输入手机号/邮箱' />
                            <div className="input-bg"></div>
                        </div>
                        <div className="item pwd">
                            <input type="password" placeholder='输入密码/验证码' />
                            <div className="input-bg"></div>
                        </div>
                        <div className="item loginview">

                        </div>
                        <span className="wrong-msg">
                           
                        </span>
                        <button type='submit' >登录</button>
                    </form>
                </div>
            </div>
        )
    }
    componentDidMount() {
        
    }
}

var Mine = connect((state, own) => {
    return {

    }
}, {

    })(Mines);

export default Mine;