import React, { Component } from 'react';
import * as d3 from 'd3';

import DataTable from '../molecule/DataTable'
import BattleSubMenu from '../molecule/BattleSubMenu'

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    let temporalData = [];
    const { parse } = this.props;
    d3.tsv(this.props.file, (data, index) => {
      temporalData.push({
        min: parseInt(data.min),
        sec: parseInt(data.sec),
        pos: parseInt(data.pos),
        Killer: data.Killer,
        Killed: data.Killed,
        Info: data.Info,
        Index: index,
      });
    }).then(() => {
      debugger;
      temporalData = parse(temporalData);
    }).then(() => {
      this.setState({ data: temporalData });
    });
  }
  render() {
    return ([
      <BattleSubMenu />,
      <p className="app-battle">
        <DataTable data={this.state.data} columns={this.props.columns}/>
      </p>
    ]);
  }
}

export default Battle;
