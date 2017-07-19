import React, { Component } from 'react';
//引入 react-redux
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import { Icon, Drawer, List, NavBar } from 'antd-mobile';
import Nav from './nav';

class App1 extends React.Component {
    state = {
        open: false,
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }
    render() {
        var that = this;
        console.log(this)
        const sidebar = (<List>
             {this.props.header.list.map((i, index) => {
                return (
                    <NavLink to={i.url} key={index} >
                        <List.Item>
                            {i.name}
                        </List.Item>
                    </NavLink>
                );
            })} 
        </List>);

        return (
            <div className='chouti' >
                <NavBar leftContent={[
                    <div key='0' className="bar-left">
                        <div className="lie left">
                            <i key='0' className="iconfont icon-liebiao"></i>
                        </div>
                        <div className='bar-name left' >{this.props.tabname}</div>
                    </div>]} rightContent={[
                        <div key='0' className="bar-right">
                            <span> {this.props.header.localtion} </span>
                            <i className="iconfont icon-xiajiantous yi"></i>
                            <i className="iconfont icon-wode er"></i>
                        </div>]} iconName="back" onLeftClick={this.onOpenChange}></NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight - 200 }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange} >
                    <div>正在努力加载中。。。</div>
                </Drawer>
            </div>
        );
    }
}

var Header = connect(
    (state, ownProps) => {
        return {
            tabname: state.tabname,
            header: state.header
        }
    }
)(App1);

export default Header;