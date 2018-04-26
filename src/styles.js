import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatList: {
    width: window.width
  },
  listItem: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  listItemTitle: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44
  },
  listItemSwitch: {
    flex: 1
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
});