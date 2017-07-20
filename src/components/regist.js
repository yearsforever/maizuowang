import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

class Regists extends Component {

    render() {
        return (
            <div className='regist margin-top' >
                <div className='regist-box' >
                    <form action="">
                        <div className="item username">
                            <input type="text" placeholder='输入手机号/邮箱' />
                            <span className="yanzheng"><span className='jianjiao' ></span>发送验证码</span>
                            <div className="input-bg"></div>
                        </div>
                        <div className="item pwd">
                            <input type="password" placeholder='输入密码/验证码' />
                            <div className="input-bg"></div>
                        </div>
                        <div className="item loginview">
                            <input className='inpview' type="text" placeholder='图形验证码' />
                            <img src="http://captcha.maizuo.com/captcha/code/getImg?key=225C7D195A019988" />
                            <div className="input-bg"></div>
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



var Regist = connect((state, own) => {
    return {

    }
}, {

    })(Regists);

export default Regist;