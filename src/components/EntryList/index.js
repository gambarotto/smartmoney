import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';


import EntryListItem from './EntryListItem'
import Container from '../Core/Container'

import useEntries from '../../hooks/useEntries'

export default function EntryList({days = 7, category, onEntryPress, onPressActionButton }) {

  const [expenseList] = useEntries(days, category)

  return (
    <Container
      title='Últimos Lançamentos'
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText='Ver mais'
      iconName='insert-chart'
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={expenseList}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (<EntryListItem
          item={item}
          isFirstItem={index === 0}
          isLastItem={index === expenseList.length - 1}
          onEntryPress={onEntryPress}
        />)}
      />
    </Container>
  );
}
