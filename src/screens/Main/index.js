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
      { item: item })
  }

  function onPressActionButton() {
    navigation.navigate('NewEntry')
  }
  return (
    <View style={styles.container}>
      <BalancePainel onPressNavigation={onPressNavigation} />

      <EntrySummary onPressActionButton={onPressActionButton} navigation={navigation} />
      <EntryList onEntryPress={onEntryPress} onPressActionButton={() => navigation.navigate('Report')} navigation={navigation} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Report')}>
        <Text>ollllaa</Text>
      </TouchableOpacity>
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