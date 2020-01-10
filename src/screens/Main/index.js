import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';

import { getEntries } from '../../services/Entries'
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
      <BalancePainel onPressNavigation={onPressNavigation} />
      <EntrySummary styleProps={4.5} onPressActionButton={onPressActionButton}/>
      <EntryList styleProps={7} onEntryPress={onEntryPress} onPressActionButton={() => navigation.navigate('Report')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Platform.OS === "ios" ? 0 : 20,
    //justifyContent:'space-between',
    backgroundColor: Colors.background
  }
});