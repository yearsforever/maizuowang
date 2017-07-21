import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

import { Tabs } from 'antd-mobile';
// 引入组件
import Nowplay from './films/nowplaying';
import Coming from './films/comingsoon';
import ScrollLink from './back2top';

const TabPane = Tabs.TabPane;

class TabExample extends Component {

    render() {
        var page = this.props.page ? this.props.page : 'now';
        return (
            <div id='tablist' className='margin-top' >
                <div className="am-tabs-top">
                    <NavLink to='/film/now/' activeClassName='active-click' ><span className='nowplay' >正在热映</span></NavLink>
                    <NavLink to='/film/com/' activeClassName='active-click' ><span className='comesoon' >即将上映</span></NavLink>
                </div>
                <Route path={'/film/now/'} component={Nowplay} ></Route>

                <Route path={'/film/com/'} component={Coming} ></Route>

                <ScrollLink />
            </div>
        )

    }

    componentDidMount() {
        this.props.changepage(this.props.match.params.name);
    }
    componentDidUpdate() {
        this.props.reload();
    }
};

const Film = connect((state, own) => {
    return {
        page: state.changepage
    }
}, {
        changepage(name) {
            return {
                type: 'CHANGE_PAGE',
                page: name
            }
        },
        reload() {
            return {
                type: ''
            }
        }
    }
)(TabExample)

export default Film;