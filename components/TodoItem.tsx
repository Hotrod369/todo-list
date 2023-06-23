import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  handleToggleTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
  handleEditTodo: (id: number, currentText: string) => void; // Accept both id and currentText
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  handleToggleTodo,
  handleRemoveTodo,
  handleEditTodo,
}) => {
  return (
    <View>
      <Text>{text}</Text>
      <TouchableOpacity onPress={() => handleToggleTodo(id)}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRemoveTodo(id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleEditTodo(id, text)}> {/* Pass id and text */}
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;