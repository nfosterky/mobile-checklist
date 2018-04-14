import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import styles from './styles';
import mockData from './mockData';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    console.warn(JSON.stringify(navigation.state))
    let title = 'Home';

    if (navigation.state.params) {
      title = navigation.state.params.title;
    }
    return { title }
  }


  constructor({navigation}) {
    super();

    let data = mockData.checklists[mockData.main];

    if (navigation.state.params) {
      data = mockData.checklists[navigation.state.params.sublist]
      console.warn(navigation.state.params.sublist)
    }

    this.state = { data }

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
          data={this.state.data}
          renderItem={ ({item}) => (
            <Text 
              style={styles.item} 
              onPress={ () => this.navigate(item) } >
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

