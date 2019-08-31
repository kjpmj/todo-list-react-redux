import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearch } from '../actions/action';

class SearchTodo extends Component {
  handleSearchInput = () => {
    const { onSetSeachText } = this.props;
    const node = this.refs.search_input;
    const searchText = node.value.trim();
    onSetSeachText(searchText);
  }

  render() {
    return(
      <div>
        <input
          type='text'
          ref='search_input'
          onInput={this.handleSearchInput}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSeachText : searchText => {
      dispatch(setSearch(searchText))
    }
  }
}

export default connect(
  '',
  mapDispatchToProps
)(SearchTodo);