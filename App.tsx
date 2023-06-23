import React, { useState, useEffect, useCallback } from 'react';
import { Text, Image, TouchableOpacity, Animated, View, ScrollView } from 'react-native';
import logo from './logo.png';
import styles from './src/styles';
import TodoList from './features/TodoList';
import TodoForm from './features/TodoForm';
import { Provider } from 'react-redux';
import store from './store/index';


const App: React.FC = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const rotation = new Animated.Value(0);

  const startRotationAnimation = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 8000, // Adjust the duration as desired
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0);
      startRotationAnimation();
    });
  };

  useEffect(() => {
    startRotationAnimation();
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Animated.Image
            source={logo}
            style={{
              transform: [
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          />
        </View>
        <ScrollView>
          <View>
            <Text style={styles.title}>My Todo List</Text>
            <TodoList showCompleted={showCompleted} />
            <TodoForm />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowCompleted(false)}
            >
              <Text>Show All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.completedButton]}
              onPress={() => setShowCompleted(true)}
            >
              <Text>Show Completed</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
} 

export default App;
