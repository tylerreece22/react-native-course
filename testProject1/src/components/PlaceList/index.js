import React from 'react'
import { StyleSheet, View } from 'react-native'

import ListItem from '../ListItem'

export default (props) => {
    const placesOutput = props.places.map((place, i) => { return <ListItem key={i} placeName={place} /> })
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})