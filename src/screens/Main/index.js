import React from 'react';
import {StatusBar, View, StyleSheet } from 'react-native';

import BalancePainel from '../../components/BanlancePanel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'
import Colors from '../../styles/Colors'

export default function Main({ navigation }) {

  function onPressNavigation(screen) {
    navigation.navigate(screen)
  }

  function onEntryPress(item) {
    navigation.navigate('NewEntry',
      { item,
        credit: parseFloat(item.amount) > 0 ? true : false
      })
  }

  function onPressActionButton() {
    navigation.navigate('Report')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.violet}  />
      <BalancePainel onPressNavigation={onPressNavigation} />
      <EntrySummary styleProps={4.5} onPressActionButton={onPressActionButton} report={false} />
      <EntryList styleProps={7} onEntryPress={onEntryPress} onPressActionButton={() => navigation.navigate('Report')} report={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
});