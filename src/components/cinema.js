import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import { Accordion, List } from 'antd-mobile';
// 引入iconfont
import '../lib/iconfont/iconfont.css';

class Cinemas extends Component {
  render() {
    return (
      <div className='cinemas' >
        <Accordion accordion openAnimation={{}} className="my-accordion" >
          {
            this.props.cinemas.map((item, index) => {

              return <Accordion.Panel header={item.name} key={index} >
                {item.list.map((i, num) => {
                  return <List.Item key={num} >
                    <div className='cinema-detail' >
                      <div className="cinema-name"> {i.name} <span className="zuo">座</span> <span className="tong">通</span> </div>
                      <div className="jiantou">
                         <i className="iconfont icon-youjiantou"></i> 
                      </div>
                      <div className="youhui">
                        <span className='kele' >可乐爆米花</span>
                        <span className='huodong' >优惠活动</span>
                      </div>
                      <div className="address"> {i.address} </div>
                      <div className="juli">距离未知</div>
                    </div>
                  </List.Item>
                })}
              </Accordion.Panel>
            })
          }
        </Accordion>
      </div>
    );
  }
  componentDidMount() {

    // Ajax 请求数据
    $.get('http://localhost:8080/cinema', {}, (data) => {
      var list = JSON.parse(data).data.cinemas;
      var local = [];
      //  获取电影院地区名
      list.map((i) => {
        local.push(i.district.name);
      })
      var name = getName(local);
      // 去重方法
      function getName(arr) {
        var cinemaName = [];
        var json = {};
        for (var i = 0; i < local.length; i++) {
          if (!json[local[i]]) {
            cinemaName.push({ name: local[i] ,
            list: [] });
            json[local[i]] = 1;
          }
        }
        return cinemaName;
      }
      //添加电影院数据
      list.map((item) => {
        name.map( (obj) => {
          if (item.district.name==obj.name) {
            obj.list.push(item);
          }
        } )
      })
      this.props.addcinema(name);
    })
  }
}


const Cinema = connect((state, own) => {
  return {
    // localtion: state.localtion,
    cinemas: state.addcinema
  }
}, {
    addcinema(list) {
      return {
        type: 'ADD_CINEMA',
        cinema: list
      }
    }
  })(Cinemas);

export default Cinema;