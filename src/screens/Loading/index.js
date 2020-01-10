import React, { useEffect } from 'react';
import {StatusBar, View, ActivityIndicator, StyleSheet } from 'react-native';

import {isInitialized} from '../../services/Welcome'
import Colors from '../../styles/Colors'

export default function Loading({navigation}) {
  
    useEffect(() => {
        async function makeRedirect(){

            await isInitialized() ? navigation.navigate('Main') : navigation.navigate('Welcome') 
        }
        makeRedirect()
    },[])
  
    return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor={Colors.background}  />
        <ActivityIndicator color={Colors.violet} size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.background,
        justifyContent:'center',
        alignItems:'center'
    },
})
//
