import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import mockData from './mockData';

class HomeScreen extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  addItem() {
    console.warn('add item');
  }

  navigate() {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={mockData.checklists[mockData.main]}
          renderItem={ ({item}) => (
            <Text 
              style={styles.item} 
              onPress={ () => this.navigateToAnswer(item) } >
              {item.title}
            </Text>
          )
          }
        />
        <Button onPress={this.addItem} title="Add Item" />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const styles = StyleSheet.create({
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
});