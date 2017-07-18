import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import $ from 'jquery';

class Nowplaying extends Component {
  render() {
    return (
      <ul className='nowPlay' >
        {this.props.addnow ?
          this.props.addnow.map((item, index) => {
            {/* console.log(item); */}
            var id = '/film_detail/' + item.id;
            return (
              <NavLink to={id} key={index} >
                <li>
                  <div className='film-item' >
                    <div className="item-img">
                      <img src={item.poster.origin} alt="" />
                    </div>
                    <div className="item-desc">
                      <div className="film-name"> {item.name} </div>
                      <div className="film-grade right"> {item.grade} <span>></span> </div>
                      <div className="film-intro"> {item.intro} </div>
                      <div className="film-counts">
                        <span className='font-color' > {item.cinemaCount}</span>
                        <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="font-color">{item.watchCount}</span>
                        <span>人购票</span>
                      </div>
                    </div>
                  </div>
                </li>
              </NavLink>
            )
          }) : ''
        }
      </ul>
    )
  }
  componentDidMount() {
    //  当前页面数据获取
    $.get('http://localhost:8080/nowPlaying', {
      page: 1,
      count: 7
    }, (data) => {
      var list = JSON.parse(data).data.films;
      this.props.getnow(list);
    })
  }
}

var Nowplay = connect((state, own) => {
  return {
    addnow: state.addnow
  }
}, {
    getnow(data) {
      return {
        type: 'ADD_NOW',
        now: data
      }
    }
  })(Nowplaying);

export default Nowplay;
