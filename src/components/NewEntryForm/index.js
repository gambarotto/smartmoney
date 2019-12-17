import React, {useState, useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useSelector , useDispatch} from 'react-redux'
import getNewUUID from '../../services/UUID'

import {saveEntry,getEntries, deleteEntry , deleteAll} from '../../services/Entries'

// import { Container } from './styles';

export default function NewEntryForm({navigation}) {
        
    const expenseSelected = navigation.getParam('item', {
        id:null,
        amount:'0',
        category:'',
        entryAt:''
    })

    const [amount, setAmount] = useState(String(expenseSelected.amount))    
    const [category, setCategory] = useState(String(expenseSelected.category))

    function isValid(){
        return parseFloat(amount) !== 0 ? true : false
    }

    async function onSave(){
        
        const value = {
            id:getNewUUID(),
            amount: parseFloat(amount),
            category:category,
            entryAt: new Date()
        }

        saveEntry(value, expenseSelected)
        goBack()
    }
    
    async function onRemove(){
        deleteEntry(expenseSelected)
        goBack()
    }

    function goBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInputs}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Valor' 
                    onChangeText={text => setAmount(text)}
                    value={amount}/>
                <TextInput
                    style={styles.inputs}
                    placeholder='Categoria'
                    onChangeText={text => setCategory(text)}
                    value={category} />
            </View>
            <View style={styles.containerLocationBtns}>
                <TouchableOpacity style={styles.actionsBtns}>
                    <Text style={styles.btn}>Cam</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.actionsBtns}>
                    <Text style={styles.btn}>Loc</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBtns}>
                <TouchableOpacity  
                    style={styles.btns}
                    onPress={goBack}>
                    <Text style={styles.txtBtn}>Cancelar</Text>
                </TouchableOpacity>
                {expenseSelected && 
                    <TouchableOpacity  
                        style={styles.btns}
                        onPress={onRemove}>
                    <Text style={styles.txtBtn}>Excluir</Text>
                </TouchableOpacity>
                }
                <TouchableOpacity  
                    style={styles.btns} 
                    onPress={() => isValid() && onSave()}>
                    <Text style={styles.TxtBtn}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 8,
        //height:'80%',
        justifyContent:'space-between'
    },
    containerInputs:{
        flex:1,
        padding:20
    },
    inputs: {
        width:'100%',
        height:60,
        borderColor: '#aaa',
        borderWidth: 0.5,
        borderRadius:8,
        marginBottom: 20,
        paddingHorizontal:10,
    },
    containerLocationBtns: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    actionsBtns:{
        height:60,
        width:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#aaa',
        justifyContent:'center',
        alignItems:'center'

    },
    containerBtns: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    btns:{
        height:50,
        width:130,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#aaa',
        justifyContent:'center',
        alignItems:'center'
    },
    txtBtn:{

    }
})