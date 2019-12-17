import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import EntryListItem from './EntryListItem'
import {getEntries} from '../../services/Entries'
import Container from '../Core/Container'

export default function EntryList({onEntryPress, onPressActionButton, navigation}) {

  //const expenseList = useSelector(state => state.expenseList)
  const[expenseList, setExpenseList] = useState()

  useEffect(()=>{
    async function loadData(){
      const data = await getEntries()
      setExpenseList(data)
    }
    loadData()
  })

  return (
    <Container 
      title='Últimos Lançamentos' 
      actionLabelText="Últimos 7 dias"
      actionButtonText='Ver mais'
      iconName='insert-chart'
      navigation={navigation}
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={expenseList}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (<EntryListItem
          item={item}
          isFirstItem={index === 0}
          isLastItem={index === expenseList.length -1}
          onEntryPress={onEntryPress}
        />)}
      />
    </Container>
  );
}
