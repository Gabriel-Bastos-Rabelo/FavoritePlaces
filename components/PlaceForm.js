import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { Colors } from '../constants/Colors';
import { useState } from 'react';

function PlaceForm() {

    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandle(enteredText){
        setEnteredTitle(enteredText);;
    }
  return (
    <ScrollView style = {styles.form}>

        <View>
            <Text style = {styles.label}>Title</Text>
            <TextInput onChangeText = {changeTitleHandle} value = {enteredTitle} style = {styles.input}/>
        </View>
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,

    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500

    },
    input: {

        marginVertical: 8,
        marginHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100

    }
})