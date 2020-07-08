import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App(){
    return (
    <>
        <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}> Hello GoStack </Text>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        color:'#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    }

});