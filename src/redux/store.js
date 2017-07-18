//引入  redux
import { createStore } from 'redux';
//引入 reducer 函数
import reducer from './reducer';

var state = {
    header: {
        title: '卖座电影',
        localtion: '深圳',
        list: [
            {
                name: '首页',
                url: '/'
            },
            {
                name: '影片',
                url: '/film/1'
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
    filmdetail: {},
    localtion: [
    //     {
    //     name: '宝安区',
    //     list: [{
    //         id: 5231,
    //         name: "深圳美视国际影城(4K沉浸音)",
    //         pinyin: "szmsgjyc(4Kcjy)",
    //         address: "深圳宝安区西乡街道前进二路桃源居10区28栋（人人乐超市二楼）",
    //         geocode: {
    //             latitude: 22.623019,
    //             longitude: 113.866337
    //         },
    //         district: {
    //             id: 0,
    //             name: "宝安区",
    //             pinyin: "bao-an-qu"
    //         },
    //         isFavorite: false,
    //         minimumPrice: 0,
    //         itemTypes: [
    //             2
    //         ],
    //         labels: [
    //             {
    //                 type: "DISCOUNT",
    //                 name: "优惠活动"
    //             }
    //         ]
    //     }, {
    //         id: 5230,
    //         name: "深圳中影德金影城(南山店)",
    //         pinyin: "szzydjyc(nsd)",
    //         address: "深圳南山区南头街道艺园东路缤纷年华家园商业裙楼301A-2号",
    //         geocode: {
    //             latitude: 22.548352,
    //             longitude: 113.935046
    //         },
    //         district: {
    //             id: 0,
    //             name: "南山区",
    //             pinyin: "nan-shan-qu"
    //         },
    //         isFavorite: false,
    //         minimumPrice: 0,
    //         itemTypes: [
    //             2
    //         ],
    //         labels: [
    //             {
    //                 type: "DISCOUNT",
    //                 name: "优惠活动"
    //             }
    //         ]
    //     },
    //     ]
    // },
    // {
    //     name: '龙华新区',
    //     list: []
    // },
    // {
    //     name: '罗湖区',
    //     list: []
    // },
    // {
    //     name: '南山区',
    //     list: []
    // },
    // {
    //     name: '福田区',
    //     list: []
    // },
    // {
    //     name: '龙岗区',
    //     list: []
    // },
    // {
    //     name: '光明新区',
    //     list: []
    // },
    // {
    //     name: '坪山新区',
    //     list: []
    // },
    // {
    //     name: '盐田区',
    //     list: []
    // },
    ],
    addcinema: []
}

//创建 store 
var store = createStore(reducer, state);
//新增一个原型方法传出去
store.createAction = function (action) {
    store.dispatch(action);
}

export default store;