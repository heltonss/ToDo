import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todo';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <div>
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.text}<button type="button" onClick={() => removeTodo(todo.id)}>Remove</button></li>)
      }
    </ul>
    <button type="button" onClick={() => addTodo('nova task')}>Add</button>
  </div>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
