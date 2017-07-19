import React, { Component } from 'react';

import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import { Tabs, WhiteSpace } from 'antd-mobile';
// 引入组件
import Nowplay from './films/nowplaying';
import Coming from './films/comingsoon';
import ScrollLink from './back2top';

const TabPane = Tabs.TabPane;

class TabExample extends Component {

    render() {
        var page = this.props.page ? this.props.page : '1';
        return (
            <div id='tablist' >
                <Tabs activeKey={page} defaultActiveKey='1' animated={false} swipeable >
                    <TabPane tab="正在热映" key="1" >
                        <Route path='/film/' component={Nowplay} ></Route>
                    </TabPane>
                    <TabPane tab="即将上映" key="2">
                        <Route path='/film/2' component={Coming} ></Route>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
               
                <ScrollLink />
            </div>
        )

    }

    componentDidMount() {
        this.props.changepage(this.props.match.params.page);
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
        changepage(page) {
            return {
                type: 'CHANGE_PAGE',
                page: page
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