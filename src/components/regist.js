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
                            <input type="text" placeholder='输入手机号/邮箱' ref='text' onChange={this.change.bind(this)} />
                            <span className="yanzheng" ref='yanzheng' ><span className='jianjiao' ></span>发送验证码</span>
                            <div className="input-bg"></div>
                        </div>
                        <div className="item pwd">
                            <input type="password" placeholder='输入密码/验证码' ref='pwd' />
                            <div className="input-bg"></div>
                        </div>
                        <div className="item loginview">
                            <input className='inpview' type="text" placeholder='图形验证码' />
                            <img src="http://captcha.maizuo.com/captcha/code/getImg?key=225C7D195A019988" />
                            <div className="input-bg"></div>
                        </div>
                        <span className="wrong-msg">
                            <span> {this.props.regist} </span>
                        </span>
                        <button type='submit' onClick={this.click.bind(this)}>登录</button>
                    </form>
                </div>
            </div>
        )
    }
    //点击事件
    click() {
        var text = this.refs.text.value;
        var pwd = this.refs.pwd.value.trim();

        if (judge(text).state == false) {
            this.props.input(judge(text).data);
        } else {
            if (!pwd == '') {
                if (pwd.length >= 6 && judge(text).state) {
                    $.get('http://localhost:8080/reg',{ user : judge(text).data, pwd : pwd },(res) => {
                        // console.log(res);
                    })
                } else {
                    this.props.input('密码长度小于六位');
                }
            } else {
                this.props.input('密码不能为空');
            }
        }


    }
    change() {
        var text = this.refs.text.value;
        if (judge(text).state) {
            var yanzheng = this.refs.yanzheng.style = 'display:block';
        } else {
            var yanzheng = this.refs.yanzheng.style = 'display:none';
        }
    }
}

//判断手机
function judge(txt) {
    var data = txt.trim();
    var reg = /^1\d{10}$/;
    if (!data == "") {
        if (reg.test(data)) {
            return {
                state: true,
                data: data
            }
        } else {
            return {
                state: false,
                data: '请输入正确手机号'
            }
        }
    } else {
        return {
            state: false,
            data: '手机号不能为空'
        }
    }

}
//判断密码

var Regist = connect((state, own) => {
    return {
        regist: state.regist
    }
}, {
        input: (data) => {
            return {
                type: 'CHANGE_REG',
                data: data
            }
        }
    })(Regists);

export default Regist;