import React, {Component} from 'react';
import Menu from '../molecule/Menu';


class TemplateMenu extends Component {
  render() {
    return ([
      <section id="menu"><Menu /></section>,
      <section id="body">{this.props.children}</section>
    ]);
  }
}

export default TemplateMenu;
