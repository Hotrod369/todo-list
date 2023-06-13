import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../src/styles';

const TodoForm: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <TouchableOpacity style={styles.todoFormContainer} onPress={handleSubmit}>
      <TextInput
        style={styles.todoInput}
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
        placeholder="Enter a new todo"
      />
      <Text style={styles.todoButton}>Add Todo</Text>
    </TouchableOpacity>
  );
};

export default TodoForm;

