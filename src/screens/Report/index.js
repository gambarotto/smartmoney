import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter'

import BalanceLabel from '../../components/BalanceLabel'
import EntrySumary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'
import RelativeDaysModal from '../../components/RelativeDaysModal'
import CategoryModal from '../../components/CategoryModal'

import Colors from '../../styles/Colors'

export default function Report({ navigation }) {

  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false)
  const [relativeDays, setRelativeDays] = useState(7)

  const [categoryModalVisible, setCategoryModalVisible] = useState(false)
  const [category, setCategory] = useState({id:null, name:'Todas Categorias'})

  function onRelativeDaysPress(item) {
    setRelativeDays(item)
    setRelativeDaysModalVisible(false)
  }

  function onModalCategoryPress(item){
    setCategory(item)
    setCategoryModalVisible(false)
  }

  return (
    <View style={styles.container}>

      <BalanceLabel />
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttons} onPress={() => setCategoryModalVisible(true)}>
          <Text style={styles.txtBtn}>{category.name}</Text>
          <Icon name='keyboard-arrow-down' size={20} color={Colors.green} />
        </TouchableOpacity>
        <CategoryModal 
          isVisible={categoryModalVisible} 
          categoryType='all' 
          onConfirm={onModalCategoryPress} 
          onCancel={setCategoryModalVisible}/>

        <TouchableOpacity style={styles.buttons} onPress={() => setRelativeDaysModalVisible(true)}>
          <Text style={styles.txtBtn}>{relativeDays > 1 ? `Últimos ${relativeDays} Dias` : `${relativeDays} Dia atrás`}</Text>
          <Icon name='keyboard-arrow-down' size={20} color={Colors.green} />
        </TouchableOpacity>
        <RelativeDaysModal 
          isVisible={relativeDaysModalVisible} 
          onConfirm={onRelativeDaysPress} 
          onCancel={setRelativeDaysModalVisible} />
      </View>

      <EntrySumary styleProps={0} />
      <EntryList days={relativeDays} category={category} />

      <ActionFooter>
        <ActionPrimaryButton
          title='Fechar'
          onPress={() => navigation.goBack()}
        />
      </ActionFooter>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: Colors.background
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    paddingVertical: 5,
    marginTop: 8,
    marginHorizontal: 8
  },

  buttons: {
    //width: 140,
    borderWidth: 1.5,
    flexDirection: 'row',
    borderColor: 'green',
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  txtBtn: {
    //fontSize:12,
    color: Colors.green
  }
})