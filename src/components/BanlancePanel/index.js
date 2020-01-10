import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles';
import BalancePainelLabel from './BalancePanelLabel'
import BalancePainelChart from './BalancePanelChart'
import { saveEntry } from '../../services/Entries'
import Colors from '../../styles/Colors'

import useBalance from '../../hooks/useBalance'

export default function BanlancePanel({onPressNavigation}) {

  const [balance] = useBalance()

  function newEntry(){
    onPressNavigation('NewEntry')
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.violet, Colors.blue]} style={styles.painel}>
        <BalancePainelLabel currentValue={balance} />
        <BalancePainelChart />
      </LinearGradient>
      <TouchableOpacity
        onPress={newEntry}
        style={styles.button}>
        <Icon name='add' size={30} color={Colors.white}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:-25
  },
  painel: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    alignSelf:'flex-end',
    backgroundColor:Colors.green,
    height:50,
    width:50,
    marginTop:-25,
    marginRight:15,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:Colors.black,
    elevation:5
  },
  txtBtn:{
    color:Colors.white
  }
})