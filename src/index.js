import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router , Route , NavLink } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//引入 raect-redux
import { Provider } from 'react-redux';

import './lib/hotcss';

//引入 子组件的样式文件
import './css/style.css';

// import $ from 'jquery';
// //引入  swiper
// import './lib/swiper-3.4.2.min.css';
// import './lib/swiper-3.4.2.jquery.min';

//引入 store 数据
import store from './redux/store';


store.subscribe (render);

render();

registerServiceWorker();

function render () {
    ReactDOM.render(
    <Provider store={store} >
        
            <App action= {store.createAction} state= {store.getState()} />
    </Provider>, 
    document.getElementById('root'));
}