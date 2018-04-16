import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  addItem: {
    flexDirection: 'row',
  },
  addItemInput: {
    backgroundColor: '#BBBBBB',
    fontSize: 18,
    padding: 5,
    flex: 1
  },
  addItemButton: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
});