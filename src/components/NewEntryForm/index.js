import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import getUUID from '../../services/UUID'

import ActionFooter,  { ActionPrimaryButton, ActionSecondaryButton } from '../Core/ActionFooter'

import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'
import NewEntryDatePicker from './NewEntryDatePicker'
import NewEntryCameraPicker from './NewEntryCameraPicker'
import NewEntryAddressPicker from './NewEntryAddressPicker'
import NewEntryDeleAction from './NewEntryDeleAction'

import useEntries from '../../hooks/useEntries'

export default function NewEntryForm({ navigation }) {

    const expenseSelected = navigation.getParam('item', {
        id: null,
        amount: '0',
        category: { id: null, name: 'Selecione' },
        entryAt: new Date(),
        photo:null,
        address:null,
        latitude:null,
        longitude:null,

    })

    const [, saveEntry, deleteEntry] = useEntries()

    const [amount, setAmount] = useState(String(expenseSelected.amount))
    const [category, setCategory] = useState(expenseSelected.category)
    const [prefix, setPrefix] = useState(expenseSelected.amount <= 0 ? false : true)
    const [entryAt, setEntryAt] = useState(expenseSelected.entryAt)
    const [photo, setPhoto] = useState(expenseSelected.photo)
    const [address, setAddress] = useState(expenseSelected.address)
    const [latitude, setLatitude] = useState(expenseSelected.latitude)
    const [longitude, setLongitude] = useState(expenseSelected.longitude)



    function isValid() {
        
        return parseFloat(amount) !== 0 && category.id  ? true : false
    }

    async function onSave() {
        let val = parseFloat(amount)

        console.log(`onSave :: data => ${JSON.stringify(entryAt)}`);

        const value = {
            id: getUUID(),
            amount: val,
            category,
            photo,
            entryAt,
            address,
            latitude,
            longitude
        }
        console.log(`onSave :: value => ${JSON.stringify(value)}`);
        console.log(`onSave :: expenseValue => ${JSON.stringify(expenseSelected)}`);

        saveEntry(value, expenseSelected)
        goBack()
    }

    async function onRemove() {
        deleteEntry(expenseSelected)
        goBack()
    }

    function goBack() {
        navigation.goBack()
    }

    function prefixFunc(bool) {
        setPrefix(bool)
        //console.log('NewEntryForm -> prefixFunc :: ', !prefix);

    }
    function onChangeCategory(newCategory) {
        setCategory(newCategory)
        console.log('onChangeCategory :: ', newCategory);
    }

    function attAddress({latitude, longitude, address}){
        setLatitude(latitude)
        setLongitude(longitude)
        setAddress(address)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInputs}>
                <NewEntryInput value={amount} onChangeValue={setAmount} prefixFunc={prefixFunc} prefixState={prefix} />
                <NewEntryCategoryPicker oldCategory={category} onChangeCategory={onChangeCategory} prefixState={prefix} />
            </View>

            <View style={styles.containerFormActions}>
                <NewEntryDatePicker value={entryAt} onChange={setEntryAt}/>
                <NewEntryCameraPicker photo={photo} onChangePhoto={setPhoto} />
                <NewEntryAddressPicker address={address} onChange={attAddress} />
                { expenseSelected.id && <NewEntryDeleAction onRemove={onRemove} expenseSelected={expenseSelected}/>}
            </View>
            
            <ActionFooter>
                <ActionSecondaryButton title='Cancelar' onPress={goBack}/>
                <ActionPrimaryButton title={expenseSelected.id ? 'Salvar' : 'Adicionar'} onPress={() => isValid() && onSave()}/>
            </ActionFooter>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        justifyContent: 'space-between'
    },
    containerInputs: {
        flex: 1,
        justifyContent:'center',
    },
    inputs: {
        width: '100%',
        height: 60,
        borderColor: '#aaa',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    containerFormActions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    actionsBtns: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btns: {
        

    },
    txtBtn: {

    }
})