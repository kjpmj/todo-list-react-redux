import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/action';

class AddTodoForm extends Component {
  handleAddBtnClick = () => {
    const { onAddBtnClick } = this.props;
    const node = this.refs.add_text;
    const text = node.value.trim();
    onAddBtnClick(text);
  }

  render() {
    // console.log('addForm rendering ~')
    return(
      <div>
        <input type="text" ref="add_text"/>
        <button
          onClick={this.handleAddBtnClick}
        >
          추가
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBtnClick : text => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(
  '',
  mapDispatchToProps
)(AddTodoForm);