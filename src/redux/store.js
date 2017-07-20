//引入  redux
import { createStore } from 'redux';
//引入 reducer 函数
import reducer from './reducer';

var state = {
    tabname: '卖座电影',
    header: {
        localtion: '深圳',
        list: [
            {
                name: '首页',
                url: '/'
            },
            {
                name: '影片',
                url: '/film/now'
            },
            {
                name: '影院',
                url: '/cinema/'
            },
            {
                name: '商城',
                url: '/show/'
            },
            {
                name: '演出',
                url: '/show/'
            },
            {
                name: '我的',
                url: '/mine/'
            },
            {
                name: '卖座卡',
                url: '/cards/'
            },
        ]
    },
    filmdetail: [],
    localtion: [],
    addcinema: [],
}

//创建 store 
var store = createStore(reducer, state);
//新增一个原型方法传出去
// store.createAction = function (action) {
//     store.dispatch(action);
// }

export default store;