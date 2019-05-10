import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';

export default class App extends Component {
  state = {
    places: []
  }

  onPlaceAdded = placeName => {

    let places = this.state.places
    places.push(placeName)

    this.setState({ places })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAdded} />
        <PlaceList places={this.state.places}/> 
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
});
