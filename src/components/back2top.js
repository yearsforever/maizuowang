import React, { Component } from 'react';

class ScrollLink extends Component {
  constructor() {
    super();
    this.state = { linkStyle: { display: 'none' } };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({ linkStyle: { display: top > 100 ? 'block' : 'none' } });
  };

  scrollToTop = () => {
    const scrollTo = (element, to, duration) => {
      if (duration <= 0) return;
      const _element = element;
      const difference = to - _element.scrollTop;
      const perTick = (difference / duration) * 10;

      setTimeout(() => {
        _element.scrollTop += perTick;
        if (_element.scrollTop === to) return;
        scrollTo(_element, to, duration - 10);
      }, 10);
    };
    scrollTo(document.body, 0, 100);
  };

  render() {
    const styles = require('./index.scss');

    return (
      <a
        className={styles.scrollLink}
        onClick={this.scrollToTop}
        style={this.state.linkStyle}
      >
        <i className="glyphicon glyphicon-arrow-up"/>
      </a>
    );
  }
}

export default ScrollLink;