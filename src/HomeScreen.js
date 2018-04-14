import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import styles from './styles';
import mockData from './mockData';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Trivia Answer',
  };
  
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  addItem() {
    console.warn('add item');
  }

  navigate(item) {
    this.props.navigation.navigate('Home', item)
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

