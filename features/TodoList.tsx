import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { createSelector } from 'reselect'; // Import createSelector from reselect
import { RootState } from '../store/index';
import { Todo, toggleTodo, removeTodo, editTodo } from '../features/todoSlice';
import Styles from '../src/styles';
import TodoItem from '../components/TodoItem';

interface TodoListProps {
  todos: Todo[];
  showCompleted: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, showCompleted }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState('');

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id: number, currentText: string) => {
    setEditedText(currentText);
    dispatch(editTodo({ id, text: editedText }));
  };

// Memoized selector using createSelector
const selectFilteredTodos = createSelector(
  (state: RootState) => state.todo.todos as Todo[], // Explicitly type todos as Todo[]
  (state: RootState, showCompleted: boolean) => showCompleted,
  (todos: Todo[], showCompleted: boolean) =>
    todos.filter((todo: Todo) => (showCompleted ? todo.completed : true))
);


const filteredTodos: Todo[] = useSelector((state: RootState) =>
  selectFilteredTodos(state, showCompleted)
);


  return (
    <ScrollView>
      <View style={Styles.todoList}>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          handleToggleTodo={handleToggleTodo}
          handleRemoveTodo={handleRemoveTodo}
          handleEditTodo={handleEditTodo}
      />
      ))}
     </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todo.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
