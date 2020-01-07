import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../styles/Colors'

export default function BalancePanelLabel({currentValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Saldo Atual
      </Text>
      <Text style={styles.value}>
        {currentValue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    //flex:1,
    justifyContent:'center',
    alignItems:'center',
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