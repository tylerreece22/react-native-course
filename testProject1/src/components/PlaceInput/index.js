import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

export default class PlaceInput extends Component {
    state = {
        placeName: '',
    }

    placeNameChangedHandler = value => {
        this.setState({ placeName: value })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") return

        this.props.onPlaceAdded(this.state.placeName)
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='An awesome value'
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button style={styles.button} title='Add' onPress={this.placeSubmitHandler} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
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