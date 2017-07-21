import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';
// import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import '../lib/iconfont/iconfont.css';

class Mines extends Component {

    render() {
        return (
            <div className='mine margin-top' >
                <div className="mine-head">
                    <header>
                        <img src="http://img0.imgtn.bdimg.com/it/u=1956647569,56987681&fm=26&gp=0.jpg" alt="" />
                        <div className="details">
                            <p>手机用户7137</p>
                            <p>ID:217314250</p>
                            <p style={{ textDecoration: 'line', color: '#ffbd80' }} >退出</p>
                        </div>
                    </header>
                </div>
                <section>
                    <div className="menu-wrapper">
                        <div className="menu center-block" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">影票订单</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu center-block" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">影票待付订单</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu center-block" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">商城订单</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu center-block" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">演出订单</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper zhongjian">
                        <div className="menu center-block" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">我的现金券</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper zhongjian">
                        <div className="menu center-block middle" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">账户余额</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper zhongjian">
                        <div className="menu center-block " >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">我的卖座卡</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu center-block" >
                            <i className="iconfont icon-wode"></i>
                            <span className="title">设置</span>
                            <div className="pull-right right">
                                <span className="value-wrap" >
                                    <span className="value" >0</span><span> 张 ></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
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