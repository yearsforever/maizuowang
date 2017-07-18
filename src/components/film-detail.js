import React, { Component } from 'react';
//引入 react-redux
import { connect } from 'react-redux';
import $ from 'jquery';

class Film_details extends Component {
  render() {
    var url = this.props.film.cover ? this.props.film.cover.origin : '';
    return (
      <section className='film-detail' >

        <div className="film-img">
          <img src={url} alt="" />
        </div>
        <div className="film-intro">
          <div className="filmsyno">影片简介</div>
          <div className="daoyan samediv">
            <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
            <span> {this.props.film.director} </span>
          </div>
          <div className="zhuyan samediv">
            <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
            <span>
              {this.props.film.actors ?
                this.props.film.actors.map((item, index) => {
                  return (item.name + '|')
                })
                : ''}
            </span>
          </div>
          <div className="nation samediv">
            <span>地区语言：</span>
            <span> {this.props.film.nation} </span>
            <span> ({this.props.film.language}) </span>
          </div>
          <div className="category samediv">
            <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
            <span> {this.props.film.category} </span>
          </div>
          <div className="shangying samediv">
            <span>上映日期：</span>
            <span>{new Date(this.props.film.premiereAt).getMonth()} 月 {new Date(this.props.film.premiereAt).getDate()}日上映</span>
          </div>
          <div className="word samediv"> {this.props.film.synopsis} </div>

        </div>

      </section>
    )

  }
  componentDidMount() {
    //获取当前页面数据
    console.log(this);
    var id = this.props.match.params.id;
    // console.log(this.props)
    $.get('http://localhost:8080/film', { id: id }, (data) => {
      var list = JSON.parse(data).data.film;
      // console.log(list);
      this.props.getFilm(list);
    })
  }
}

var Film_detail = connect(
  (state, own) => {
    return {
      film: state.filmdetail
    }
  },
  (dispatch, own) => {
    return {
      getFilm: (data) => {
        // console.log(data);
        dispatch({
          type: 'CHANGE_FILM',
          filmdetail: data,
          name: data.name
        })
      }
    }
  }
)(Film_details);

export default Film_detail;