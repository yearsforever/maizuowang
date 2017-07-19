import React, { Component } from 'react';
//引入 react-redux
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import $ from 'jquery';

//引入各个子组件
import Header from './components/Header';
import Nav from './components/nav';
import Film from './components/film';
import Film_detail from './components/film-detail';
import Cinema from './components/cinema';
import Mine from './components/regist';

class Apps extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                     <Header />      
                     <Route exact path="/" component={Nav} />
                     <Route  path='/film/:page' component={Film} />  
                     <Route  path='/cinema/' component={Cinema} />
                     <Route  path='/mine/' component={Mine} />
                     <Route  path="/film_detail/:id" component={Film_detail} /> 
                </div>
            </Router>
        );
    }
}
//创建容器组件
var App = connect(
    //这里面两个参数
    // 1.  ui组件中需要用到的数据
    (state, ownProps) => {
        return {

        }
    },
    // 2.  ui组件中的方法操作
    (dispatch, ownProps) => {
        return {
            change: () => {
                dispatch({
                    type: 'CHANGE_TITLE',
                    title: '这里是action的测试'
                })
            }
        }
    }
)(Apps);

export default App;
