import React from 'react';
import { View, Text, Button, FlatList, TextInput, Switch } from 'react-native';

import styles from './styles';
import mockData from './mockData';

import CheckItem from './CheckItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    let title = 'Home';

    if (navigation.state.params) {
      title = navigation.state.params.title;
    }
    return { title }
  }


  constructor({navigation}) {
    super();
    const checklist = navigation.state.params;

    this.id = checklist ? checklist.sublist : mockData.main;

    const data = this.getData(this.id);

    this.state = {
      data: data,
      newItemInput: ''
    }

    this.addItem = this.addItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  getData(id) {
    const checklist = mockData.checklists[id] || []; 

    return checklist.map( id => mockData.items[id] );
  }

  addItem() {
    if (this.state.newItemInput) {
      const newItem = new CheckItem(this.state.newItemInput);

      this.setState({
        data: [ ...this.state.data, newItem ],
        newItemInput: ''
      })

      mockData.checklists[this.id].push(newItem);
    }
  }

  handleInputChange(newText) {
    this.setState({
      newItemInput: newText
    })
  }

  handleSwitchChange(changedItem, newValue) {
    const { data } = this.state;
    const newData = data.map( item => {
      if (item === changedItem) {
        item.done = newValue;
      }
      return item;
    })

    this.setState({ data: newData })
  }

  copyList(item) {
    const duplicate = Object.assign({}, item, {key: 9999});

    this.setState({
      data: [ ...this.state.data, duplicate ],
    })
  }

  navigate(item) {
    this.props.navigation.navigate('Home', item)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={this.state.data}
          renderItem={ ({item}) => (
            <View style={styles.listItem} >
              <Switch 
                value={item.done} 
                onValueChange={ isChecked => this.handleSwitchChange(item, isChecked) }/>

              <Text
                style={styles.listItemTitle} 
                onPress={ () => this.navigate(item) } >
                {item.title}
              </Text>

              <Button onPress={ () => this.copyList(item) } title="Copy" />
            </View>
          )
          }
        />
        <View style={styles.addItem}>
          <TextInput 
            style={styles.addItemInput} 
            placeholder="Add Item" 
            value={this.state.newItemInput} 
            onChangeText={this.handleInputChange} />

          <Button style={styles.addItemButton} onPress={this.addItem} title="Save" />
        </View>
      </View>
    );
  }
}

