//引入  jquery
import $ from 'jquery';

function reducer(state, action) {

    switch (action.type) {
        //  轮播图的数据
        case 'CHANGE_NAV':
            return Object.assign({}, state, {
                lunbo: action.lunbo,
            });
        //  首页正在热映的数据
        case 'CHANGE_NOW':
            return Object.assign({}, state, {
                nowplaying: action.nowplaying
            });
        //  首页即将播放的数据
        case 'CHANGE_COM':
            return Object.assign({}, state, {
                comingsoon: action.comingSoon
            });
        //  单个电影详情的页面
        case 'CHANGE_FILM':
            return Object.assign({}, state, {
                filmdetail: action.filmdetail,
                // tabname: action.name
            });
         //  影片页面的正在热映数据
        case 'ADD_NOW':
            return Object.assign({}, state, {
                addnow: action.now
            });
         //  影片页面的正在热映数据
        case 'ADD_COM':
            return Object.assign({}, state, {
                addcom: action.com
            });
          // tab栏切换页面
        case 'CHANGE_PAGE':
            return Object.assign({}, state, {
                changepage: action.page
            });
        // 电影院数据
        case 'ADD_CINEMA':
            return Object.assign({}, state, {
                addcinema: action.cinema
            });
        // test 测试方法
        case 'test':
            return "哈哈啊哈哈";
        default:
            return state;
    }

}

export default reducer;