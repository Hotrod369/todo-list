import { StyleSheet, ViewStyle, TextStyle, Animated, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fa8a2',
    marginTop: 200,
    minHeight: 370,
  },
  header: {
    backgroundColor: '#282c34',
    marginTop: -200,
    minHeight: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20, // Adjust the font size as needed
    color: 'white',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 26, // Adjust the font size as needed
  },
  logo: {
    height: 200,
    width: 200,
    // Add any other logo styles you need
  },  
  button: {
    color: '#000000',
    letterSpacing: 0,
    wordSpacing: 0,
    lineHeight: 0,
    textTransform: 'none',
    textIndent: 0,
    textShadow: 'none',
    textAlign: 'center',
    alignItems: 'flex-start',
    cursor: 'default',
    boxSizing: 'border-box',
    backgroundColor: '#DAA520',
    margin: 5,
    marginLeft: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    width: 200
  },
  completedButton: {
    color: '#000000',
    letterSpacing: 0,
    wordSpacing: 0,
    lineHeight: 0,
    textTransform: 'none',
    textIndent: 0,
    textShadow: 'none',
    textAlign: 'center',
    alignItems: 'flex-start',
    cursor: 'default',
    boxSizing: 'border-box',
    backgroundColor: '#DAA520',
    margin: 5,
    marginLeft: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    width: 200,
  },

  todoInput: {
    color: '#000000',
    margin: 5,
    marginLeft: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,    
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    backgroundColor: 'goldenrod',
    width: 200
  },
  todoList: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginTop: 20,
    marginLeft: 20,
  },
  todoItem: {
    marginBottom: 10,
    display: 'flex',
  },
  todoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  todoButton: {
    marginLeft: 10,
    margin: 5,
    padding: 5,
    alignItems: 'flex-start',
    textAlign: 'center',
    backgroundColor: '#DAA520',
    color: '#000000',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 5,
    width: 200,
    
  },
  
  todoFormContainer: {
    marginBottom: 0, 
  },
  todoTitle: {
    textAlign: "center",
    color: "#000000",
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
    
});

export default styles as { [key: string]: ViewStyle | TextStyle };
