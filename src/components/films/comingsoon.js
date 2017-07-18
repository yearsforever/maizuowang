import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import $ from 'jquery';

class Comingsoon extends Component {
  render() {
    return (
      <ul className='nowPlay' >
        {this.props.addcom ?
          this.props.addcom.map((item, index) => {
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
                      <div className="film-grade right"><span>></span></div>
                      <div className="film-intro"> {item.intro} </div>
                      <div className="film-date">
                        <span>{new Date(item.premiereAt).getMonth()} 月 {new Date(item.premiereAt).getDate() }日上映&nbsp;&nbsp;&nbsp;星期{getDay(new Date(item.premiereAt).getDay())}</span>
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
    $.get('http://localhost:8080/comingSoon', {
      page: 1,
      count: 7
    }, (data) => {
      var list = JSON.parse(data).data.films;
      // console.log(list);
      this.props.getcom(list);
    })
  }
}

function getDay(num) {
  switch (num) {
    case 1 :
      return '一';
      break;
    case 2 :
      return '二';
      break;
    case 3 :
      return '三';
      break;
    case 4 :
      return '四';
      break;
    case 5 :
      return '五';
      break;
    case 6 :
      return '六';
      break;
    case 0 :
      return '日';
      break;
  
    default:
      break;
  }
}

var Coming = connect((state, own) => {
  return {
    addcom: state.addcom
  }
}, {
    getcom(data) {
      return {
        type: 'ADD_COM',
        com: data
      }
    }
  })(Comingsoon);

export default Coming;
