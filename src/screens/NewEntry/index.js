import React from 'react';
import { View, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel'
import NewEntryForm from '../../components/NewEntryForm'
import Colors from '../../styles/Colors'

export default function NewEntry({navigation}) {
  return (
    <View style={styles.container}>
        <BalanceLabel />
        <NewEntryForm navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background,
    padding:20
  }
})