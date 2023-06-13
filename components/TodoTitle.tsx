import React from 'react';
import { Text, View } from 'react-native';
import styles from '../src/styles';

const TodoTitle: React.FC = () => {
  return (
    <View style={styles.todoTitle}>
      <Text style={styles.title}>Todo List</Text>
      {/* TODO: Add the list of todos here */}
    </View>
  );
};

export default TodoTitle;

