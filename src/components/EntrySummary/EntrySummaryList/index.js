import React from 'react';
import { View ,Text ,FlatList,ScrollView, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg'

import Currency from '../../Currency'
import Colors from '../../../styles/Colors'

const ItemList = ({ description, value, indicator }) => {
  const bulletColor = indicator || Colors.white
  
  return (
    <View style={styles.containerItem}>

      <Svg height='20' width='22'>
        <Circle 
          cx='10' 
          cy='10' 
          r='8' 
          stroke={Colors.background} 
          strokeWidth='0.5'
          fill={bulletColor}
        />
      </Svg>
      <View style={styles.containerDescriptionItem}>
        <Text style={styles.txtItem}>{description}</Text>
      </View>
      <View style={styles.containerValueItem}>
        <Text style={styles.txtItem}>
          <Currency value={value.toFixed(2)} />
        </Text>
      </View>

    </View>
  )
}

export default function EntrySummaryList({balaceSum}) {
  
  const data = balaceSum.map(({category, amount}) => ({
    key:category.id,
    name: category.name,
    value: amount,
    color:category.color
  }))
  
  return (
    <View style={{flex:1}}>
        <FlatList 
            style={styles.container}
            data={data}
            keyExtractor={item => item.key}
            renderItem={({item}) => <ItemList 
                description={item.name}
                value={item.value}
                indicator={item.color}
            />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex:1
    //backgroundColor:'green'
  },
  containerItem:{
    height:30,
    width:'100%',
    flexDirection:'row',
    padding:2,    
    justifyContent:'space-between',
    alignItems:'center'
  },
  containerDescriptionItem:{
    flex:1,
    padding:2,
    //alignItems:'center'
  },
  containerValueItem:{
    flex:1,
    //width:100,
    //backgroundColor:'red',
    //paddingLeft:40
    alignItems:'flex-end'
  },
  txtItem:{
    color:Colors.white,
    fontSize:12
  }
})