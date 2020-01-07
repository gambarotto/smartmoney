import React from 'react';
import { Alert, View, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors'

export default function NewEntryDeleAction({onRemove, expenseSelected}) {
  
    function onRemoveExpense(){
        if(expenseSelected.id){
            Alert.alert(
                'Apagar?',
                'Você deseja apagar este lançamento?',
                [
                    {text:'Não', style:'cancel'},
                    {text:'Sim', onPress: () => onRemove()}
                ],
                {
                    cancelable:false
                }
            )
        }

    }

    return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onRemoveExpense}>
            <Icon name='delete' size={30} color={Colors.white} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:Colors.red,
        alignItems:'center',
        justifyContent:'center'
    }
})
