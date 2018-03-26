import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class DataTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <ReactTable
        data={data}
        columns={this.props.columns}
        noDataText="No data!"
        defaultPageSize={100}
        showPaginationTop={false}
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    );
  }
}

export default DataTable;
