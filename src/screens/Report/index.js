import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel'
import EntrySumary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'


// import { Container } from './styles';

export default function Report() {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View style={styles.containerBtnsFilter}>
        <TouchableOpacity style={styles.btnsFilter}>
          <Text style={styles.txtBtnFilter}>Todas Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnsFilter}>
          <Text style={styles.txtBtnFilter}>Ultimos 7 dias</Text>
        </TouchableOpacity>
      </View>
      <EntrySumary />
      <EntryList />
      <View style={styles.containerBtns}>
        <TouchableOpacity style={styles.btns}>
          <Text style={styles.txtBtn}>Todas Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns}>
          <Text style={styles.txtBtn}>Ultimos 7 dias</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-around',
    padding:20
  },
  containerBtnsFilter: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  btnsFilter: {
    width:140,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#333',
    borderRadius:30
  },
  txtBtnFilter: {
    fontWeight:'bold'
  },
  containerBtns:{
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  btns:{
    width:120,
    height:60,
    borderWidth:1,
    borderColor:'green',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',

  },
  txtBtn:{

  }


})