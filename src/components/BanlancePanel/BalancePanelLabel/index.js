import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Currency from '../../Currency'
import Colors from '../../../styles/Colors'

export default function BalancePanelLabel({currentValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Saldo Atual
      </Text>
      <Text style={styles.value}>
        <Currency value={currentValue}/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    //flex:1,
    paddingTop:10,
    justifyContent:'center',
    alignItems:'center',
    zIndex:1
  },
  label:{
    fontSize:14,
    color:Colors.white
  },
  value: {
    fontSize:36,
    color:Colors.white
  }
})