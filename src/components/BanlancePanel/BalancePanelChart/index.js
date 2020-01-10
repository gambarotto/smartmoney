import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, LineChart, Grid } from 'react-native-svg-charts'

import useBalanceSumByDate from '../../../hooks/useBalanceSumByDate'
// import { Container } from './styles';

export default function BalancePanelChart() {

  const [balanceSum] = useBalanceSumByDate()
  
  return (
    <View style={styles.container}>
      
      <LineChart 
        style={styles.chart} 
        data={balanceSum}
        svg={{
          //fill: 'rgba(0,0,0,0.1)',
          stroke: 'rgba(0,0,0,0.1)',
          strokeWidth:3
        }}
        contentInset={{
          top:20,
          bottom:20
        }}>
          
        </LineChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    //paddingHorizontal:40,
    marginTop:-20
  },
  chart: {
    width:'100%',
    height:80
  }
})