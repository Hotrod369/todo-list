import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Styles from '../src/styles';

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
    <View>
      <TouchableOpacity style={Styles.todoFormContainer} onPress={handleSubmit}>
        <TextInput
          style={Styles.todoInput}
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
          placeholder="Enter a new todo"
        />
        <Text style={Styles.todoButton}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;

