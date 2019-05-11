import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import ListItem from '../ListItem'

export default (props) => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => props.onItemPressed(i)} />))
    return (
        <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})