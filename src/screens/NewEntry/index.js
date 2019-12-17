import React from 'react';
import { View, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel'
import NewEntryForm from '../../components/NewEntryForm'
// import { Container } from './styles';

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
    justifyContent:'space-between',
    //alignItems:'center'
  }
})