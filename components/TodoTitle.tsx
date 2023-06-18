import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../src/styles';

const TodoTitle: React.FC = () => {
  return (
    <View style={Styles.todoTitle}>
      <Text style={Styles.title}>Todo List</Text>
      {/* TODO: Add the list of todos here */}
    </View>
  );
};

export default TodoTitle;

