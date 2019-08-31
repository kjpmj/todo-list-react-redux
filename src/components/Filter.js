import React, { Component } from 'react';
import { filterType, setFilter} from '../actions/action';
import { connect } from 'react-redux';

class Filter extends Component {
  handleFilterClick = (e) => {
    const { onFilterClick } = this.props;

    onFilterClick(e.target.name);
  }

  render() {
    return(
      <div>
        <button name={filterType.SHOW_ALL} onClick={this.handleFilterClick}>ALL</button>
        <button name={filterType.SHOW_COMPLETED} onClick={this.handleFilterClick}>COMPLETE</button>
        <button name={filterType.SHOW_ACTIVE} onClick={this.handleFilterClick}>ACTIVE</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick : filter => {
      dispatch(setFilter(filter))
    }
  }
}

export default connect(
  '',
  mapDispatchToProps
)(Filter);