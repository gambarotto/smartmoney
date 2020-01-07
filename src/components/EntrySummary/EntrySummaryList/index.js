import React from 'react';
import { View ,Text ,FlatList, StyleSheet } from 'react-native';

const ItemList = ({ description, value, indicator }) => {
  return (
    <View style={styles.containerItem}>
      <View style={[styles.indicatorItem, { backgroundColor: indicator }]} />
      <View style={styles.containerDescriptionItem}>
        <Text>{description}</Text>
      </View>
      <View style={styles.containerValueItem}>
        <Text>{value}</Text>
      </View>

    </View>
  )
}

export default function EntrySummaryList({totalExpenses}) {
  return (
    <View style={{flex:1}}>
        <FlatList 
            data={totalExpenses}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <ItemList 
                description={item.description}
                value={item.value}
                indicator='blue'
            />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem:{
    height:40,
    width:'100%',
    flexDirection:'row',
    padding:5,
  },
  indicatorItem:{
    height:10,
    width:10,
    borderRadius:5
  },
  containerDescriptionItem:{
    flex:1,
    padding:2,
    alignItems:'center'
  },
  containerValueItem:{
    flex:1,
    alignItems:'center'
    
  }
})