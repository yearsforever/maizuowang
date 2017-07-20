import React, { Component } from 'react';
//引入 react-redux
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import { Icon, Drawer, List, NavBar } from 'antd-mobile';
import Nav from './nav';
import Film from './film';
import Film_detail from './film-detail';
import Cinema from './cinema';
import Regist from './regist';
import Mine from './mine';

class App1 extends React.Component {
    state = {
        open: false,
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }
    render() {
        var that = this;
        // console.log(this)
        const sidebar = (<List>
            {this.props.header.list.map((i, index) => {
                return (
                    <NavLink to={i.url} key={index} onClick={this.onOpenChange} >
                        <List.Item>
                            {i.name}
                        </List.Item>
                    </NavLink>
                );
            })}
        </List>);

        return (
            <Router>
                <div className='chouti' >
                    <NavBar leftContent={[
                        <div key='0' className="bar-left">
                            <div className="lie left" onClick={this.onOpenChange}>
                                <i key='0' className="iconfont icon-liebiao"></i>
                            </div>
                            <div className='bar-name left' >{this.props.tabname}</div>
                        </div>]} rightContent={[
                            <div key='0' className="bar-right">
                                <span> {this.props.header.localtion} </span>
                                <i className="iconfont icon-xiajiantous yi"></i>
                                <i className="iconfont icon-wode er"></i>
                            </div>]} iconName="back" ></NavBar>
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight - 200 }}
                        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange} >
                         <div style={{display:'none'}} ></div> 
                         <Route exact path="/" component={Nav} />
                        <Route path='/film/now/' component={Film} />
                        <Route path='/film/com/' component={Film} />
                        <Route path='/cinema/' component={Cinema} />
                        <Route path='/regist/' component={Regist} />
                        <Route path='/mine/' component={Mine} />
                        <Route path="/film_detail/:id" component={Film_detail} /> 
                    </Drawer>
                </div>
            </Router>
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