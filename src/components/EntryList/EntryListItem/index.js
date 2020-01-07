import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors'

const IndicatorCategory = ({item, isFirstItem, isLastItem }) => {

  const bulletLineY = isFirstItem ? 25 : 0
  const bulletLineHeight = isLastItem ? 30 : 50
  const showBulletLine = !(isFirstItem && isLastItem)
  const bulletColor = item.category.color || Colors.white
  //const bulletColor = Colors.blue

  return (
    <View>
      <Svg height="50" width="30">
        {showBulletLine &&
          <Rect
            x='9'
            y={bulletLineY}
            width='1.5'
            height={bulletLineHeight}
            fill={Colors.background}
          />}
        <Circle
          cx='10'
          cy='25'
          r={8}
          stroke={Colors.background}
          strokeWidth='1.5'
          fill={bulletColor}
        />
      </Svg>
    </View>
  )
}

function EntryListItem({ item, isFirstItem, isLastItem, onEntryPress }) {

  function onEntrySelected() {
    onEntryPress(item)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onEntrySelected}>
      <IndicatorCategory
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        item={item} />
      <View style={styles.containerExpense}>
        <View style={styles.nameExpense}>
          <Text style={styles.labelNameExpense}>{item.category.name}</Text>
        </View>
        <View style={styles.infoExpense}>
          {item.entryAt && (
            <View style={styles.infos}>
              <Icon name='access-time' size={12} color={Colors.metal} />
              <Text style={styles.labelTimeLocalExpense}>{JSON.stringify(item.entryAt)}</Text>            
            </View>
          )}
          {item.address && (
            <View style={styles.infos}>
              <Icon name='person-pin' size={12} color={Colors.metal} />
              <Text style={styles.labelTimeLocalExpense}>local</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.containerValue}>
        <Text style={styles.labelValueExpense}>{`$ ${item.amount}`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default EntryListItem;

// <View style={[styles.indicatorItem, { backgroundColor: 'red' }]} />
// <View style={styles.containerDescriptionItem}>
//     <Text>{item.id}</Text>
// </View>
// <View style={styles.containerValueItem}>
//     <Text>{item.amount}</Text>
// </View>

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
    //padding: 5,
  },
  containerExpense: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    //backgroundColor: 'yellow',
    //justifyContent: 'space-between',
    maxWidth: '70%'
  },
  nameExpense: {
    flex: 1,
    justifyContent:'center'
    //backgroundColor: 'purple',
  },
  labelNameExpense: {
    color: Colors.white,
    fontSize: 14
  },
  infoExpense: {
    flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
    //justifyContent:'flex-start',
    alignItems: 'center'
  },
  infos:{
    flexDirection:'row'
  },
  labelInfoExpense: {
    color: Colors.white
  },
  labelTimeLocalExpense: {
    color: Colors.metal,
    fontSize: 12,
    marginRight: 10,
    paddingLeft: 5
  },
  containerValue: {
    flex: 1,
    maxWidth: '15%',
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelValueExpense: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold'
  }
})

//
//