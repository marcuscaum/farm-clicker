import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    benefits: store.benefits
  };
})

export default class Barn extends Component {
  constructor(props) {
    super(props);
    window.props = this.props;
  }

  itemImages(item) {
    let style;
    let items = [];

    for (var i = 0; i < item.quantity; i++) {
      items.push(<div key={item + i}></div>)
    }

    return items;
  }

  render() {
    const { benefits } = this.props;

    return(
      <ul className="barn">
        <li className="barn-item barn-item-pig">
          {this.itemImages(benefits.pig)}
        </li>
        <li className="barn-item barn-item-chicken">
          {this.itemImages(benefits.chicken)}
        </li>
        <li className="barn-item barn-item-cow">
          {this.itemImages(benefits.cow)}
        </li>
      </ul>
    );
  }
}
