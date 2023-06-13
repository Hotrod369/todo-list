import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { RootState } from '../store';
import { Todo, toggleTodo, removeTodo, editTodo } from './todoSlice';
import styles from '../src/styles';
import TodoItem from '../components/TodoItem';

interface TodoListProps {
  showCompleted: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ showCompleted }) => {
  const todos = useSelector((state: RootState) =>
    state.todo.todos.filter((todo) => (showCompleted ? todo.completed : true))
  );
  const dispatch = useDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id: number) => {
    const editedText = prompt('Enter the edited text');
    if (editedText) {
      dispatch(editTodo({ id, text: editedText }));
    }
  };

  return (
    <ScrollView> {/* Use ScrollView for scrolling */}
      <View style={styles.todoList}>
        {todos.map((todo: Todo) => (
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

export default TodoList;
