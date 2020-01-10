import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts'


export default function EntrySummaryChart({balaceSum}) {
  
  const chartData = balaceSum.map(({category, amount}) => ({
    key: category.id,
    value:amount,
    svg: {
      fill:category.color
    },
    arc:{
      outerRadius:'100%',
      innerRadius:'80%'
    }

  }))

  return (
    <View style={styles.container}>
      <PieChart 
        style={styles.chart}
        data={chartData}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  },
  chart: {
    height:100,
    width:100,
    marginRight:10
  }
})