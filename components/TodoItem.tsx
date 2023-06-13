import React from 'react';
import { CheckBox, ListItem } from 'react-native-elements';
import { TouchableOpacity, Text, View } from 'react-native';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  handleToggleTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
  handleEditTodo: (id: number) => void;
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
    <ListItem bottomDivider>
      <TouchableOpacity onPress={() => handleToggleTodo(id)}>
        <CheckBox checked={completed} onPress={() => handleToggleTodo(id)} />
      </TouchableOpacity>
      <ListItem.Content>
        <ListItem.Title>
          <View> {/* Wrap the Text component with a View */}
            <Text>{text}</Text>
          </View>
        </ListItem.Title>
      </ListItem.Content>
      <TouchableOpacity onPress={() => handleEditTodo(id)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRemoveTodo(id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </ListItem>
  );
};

export default TodoItem;
