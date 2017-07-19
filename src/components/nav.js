import React, { Component } from 'react';
//引入 react-redux
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import $ from 'jquery';
//引入  swiper
import '../lib/swiper-3.4.2.min.css';
import Swiper from 'swiper';

var mySwiper;

class Navs extends Component {
  render() {
    return (
      <nav>
        {/* 轮播图的数据 */}
        <div className="swiper-container swiper-box">
          <div className="swiper-wrapper">
            {this.props.lunbo ?
              this.props.lunbo.map((item, index) => {
                return (<div key={index} className="swiper-slide">
                  <img src={item.imageUrl} alt="" />
                </div>)
              }) : ''
            }
          </div>
        </div>
        <div className="movie">
          {/* 正在热映的数据 */}
          <ul className='nowplaying' >
            {this.props.nowplaying ?
              this.props.nowplaying.map((item, index) => {
                {/* console.log(item.id);   */ }
                var id = '/film_detail/' + item.id;
                return (
                  <NavLink to={id} key={index} >
                    <li>
                      <div>
                        <div className="pic">
                          <img src={item.cover.origin} alt="" />
                        </div>
                        <div className="desc">
                          <div className="desc-left left">
                            <div className="file-name"> {item.name} </div>
                            <div className="counts">
                              <span> {item.cinemaCount} </span>
                              <span>家影院上映</span>
                              <span> {item.watchCount} </span>
                              <span>人购票</span>
                            </div>
                          </div>
                          <div className="desc-right right">
                            <span> {item.grade} </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </NavLink>
                )
              }) : ''}
            {

            }

          </ul>
          {/* 热映电影点击链接 */}
          <div className="more-button">
            <NavLink to='/film/1' >更多热映电影</NavLink>
          </div>
          <div className="dividing-line">
            <div className="line"></div>
            <div className="upcoming">即将上映</div>
          </div>
          {/* 即将上映的数据 */}
          <ul className="comingsoon">
            {this.props.comingsoon ?
              this.props.comingsoon.map((item, index) => {
                var id = '/film_detail/' + item.id;
                return (
                  <NavLink to={id} key={index} >
                    <li>
                      <div>
                        <div className="pic">
                          <img src={item.cover.origin} alt="" />
                        </div>
                        <div className="detail">
                          <div className="de-left">
                            <div className="file-name"> {item.name} </div>
                          </div>
                          <div className="de-right">
                            <div className="show-date"> {new Date(item.premiereAt).getMonth()}月{new Date(item.premiereAt).getDate()}日上映</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </NavLink>
                )
              }) : ''
            }
          </ul>
          {/* 上映电影点击链接 */}
          <div className="more-button">
            <NavLink to='/film/2' >更多即将上映电影</NavLink>
          </div>
        </div>
        {/* 回到顶部链接 */}
        <div className="back-to-top">
          <div className="circle">
            <i className="iconfont icon-tubiao102"></i>
          </div>
        </div>
      </nav>

    )
  }
  componentDidUpdate() {
    // mySwiper.update();
    // mySwiper.reLoop();
  }
  componentDidMount() {
    //轮播图的js
    // var mySwiper = new Swiper('.swiper-container', {
    //   loop: true,
    //   autoplay: 5000
    // })

    // console.log(this);
    var that = this;
    //  轮播图数据
    $.get('http://localhost:8080/lunbo', (data) => {
      var navList = JSON.parse(data).data.billboards;
      that.props.getLunbo(navList);

      mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5000
      })
    })

    //  nowPlaying 数据
    $.get('http://localhost:8080/nowPlaying', (data) => {
      var navList = JSON.parse(data).data.films;
      that.props.getNowPlaying(navList);
    })

    //  comingSoon 数据
    $.get('http://localhost:8080/comingSoon', (data) => {
      var navList = JSON.parse(data).data.films;
      that.props.getcomingSoon(navList);
    })
  }
}

var Nav = connect(
  (state, ownProps) => {
    return {
      head: state.header,
      lunbo: state.lunbo,
      nowplaying: state.nowplaying,
      comingsoon: state.comingsoon
    }
  },
  (dispatch, ownProps) => {
    return {
      getLunbo: (data) => {
        dispatch({
          type: 'CHANGE_NAV',
          lunbo: data
        })
      },
      getNowPlaying: (data) => {
        dispatch({
          type: 'CHANGE_NOW',
          nowplaying: data
        })
      },
      getcomingSoon: (data) => {
        dispatch({
          type: 'CHANGE_COM',
          comingSoon: data
        })
      }
    }
  }
)(Navs);

export default Nav;