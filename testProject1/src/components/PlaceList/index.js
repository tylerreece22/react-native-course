import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ListItem from '../ListItem'

export default (props) => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={({ item }) => (
                <ListItem
                    placeName={item.value}
                    onItemPressed={() => props.onItemPressed(item.key)}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})