import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import ListItem from './src/components/ListItem'

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = value => {
    this.setState({ placeName: value })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return

    let places = this.state.places
    places.push(this.state.placeName)

    this.setState({ places })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => { return <ListItem key={i} placeName={place}/> })
    return (
      <View style={styles.container}>
        <View style={styles.inputConstainer}>
          <TextInput
            style={styles.input}
            placeholder='An awesome value'
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button style={styles.button} title='Add' onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputConstainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%'
  },
  button: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
