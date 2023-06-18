import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
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

  const selectFilteredTodos = useMemo(
    () => (state: RootState) =>
      state.todo.todos.filter((todo) => (showCompleted ? todo.completed : true)),
    [showCompleted]
  );

  const filteredTodos = useSelector(selectFilteredTodos);

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
