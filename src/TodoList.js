import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TodoList = ({ todos, addTodo }) => (
  <div>
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.text}</li>)
      }
    </ul>
    <button type="button" onClick={() => addTodo('nova task')}>Add</button>
  </div>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>({
  addTodo: text => dispatch({type: 'ADD_TODO', payload: { text } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
