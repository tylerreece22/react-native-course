import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default listItem = (props) => {
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        margin: 'bottom',
        padding: 10,
        backgroundColor: '#eee'
    }
})