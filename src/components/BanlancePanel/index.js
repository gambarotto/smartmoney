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

export default function BanlancePanel({onPressNavigation}) {

  const currentValue = useSelector(state => state.currentValue)

  function newEntry(){
    onPressNavigation('NewEntry')
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.violet, Colors.blue]} style={styles.painel}>
        <BalancePainelLabel currentValue={currentValue} />
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
    //justifyContent:'flex-end',
    //alignItems:'flex-end'
  },
  painel: {
    //flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,

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