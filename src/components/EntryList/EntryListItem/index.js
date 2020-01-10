import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg'

import Currency from '../../Currency'
import moment from '../../../vendors/moment'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors'

const IndicatorCategory = ({ item, isFirstItem, isLastItem }) => {

  const bulletLineY = isFirstItem ? 25 : 0
  const bulletLineHeight = isLastItem ? 30 : 75 
  const showBulletLine = !(isFirstItem && isLastItem)
  const bulletColor = item.category.color || Colors.white

  return (
    <View>
      <Svg height="75" width="30">
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
          cy='35'
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
                <Text style={styles.labelTimeLocalExpense} numberOfLines={1}>{moment(item.entryAt).calendar()}</Text>
              </View>
            )}
            {item.address && (
              <View style={styles.infos}>
                <Icon name='person-pin' size={12} color={Colors.metal} />
                <Text style={styles.labelTimeLocalExpense} numberOfLines={1}>{ item.address}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.containerValue}>
          <Text style={styles.labelValueExpense}>
            <Currency value={item.amount} />
          </Text>
        </View>
      </TouchableOpacity>

  )
}

export default EntryListItem;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:2,
  },
  containerExpense: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    maxWidth: '70%'
  },
  nameExpense: {
    flex: 1,
    justifyContent: 'center',
  },
  labelNameExpense: {
    color: Colors.white,
    fontSize: 15,
  },
  infoExpense: {
    flex: 1,
    alignItems: 'flex-start'
  },
  infos: {
    flexDirection: 'row',
    paddingLeft:5,
    marginBottom:2
  },
  labelInfoExpense: {
    color: Colors.white
  },
  labelTimeLocalExpense: {
    color: Colors.metal,
    fontSize: 12,
    marginRight: 10,
    paddingLeft: 5,

  },
  containerValue: {
    flex: 1,
    maxWidth: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  labelValueExpense: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold'
  },
  actionContainer: {
    flex: 1,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAction: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
    paddingHorizontal: 20
  }
})
