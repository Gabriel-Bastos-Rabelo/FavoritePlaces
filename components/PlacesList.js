import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import PlaceItem from './PlaceItem'
import { Colors } from '../constants/Colors'

function PlacesList({places}) {

    if(!places || places.length === 0){
        return (<View style = {styles.fallbackContainer}>
            <Text style = {styles.fallbackText}>No places added</Text>
        </View>)
    }
  return (
    <FlatList data={places} keyExtractor={item => item.id} renderItem={({item}) => <PlaceItem place = {item}/>}/>
  )
}

export default PlacesList


const styles = StyleSheet.create({
    fallbackContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    }
})