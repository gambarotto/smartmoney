import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import getUUID from '../../services/UUID'

import ActionFooter,  { ActionPrimaryButton, ActionSecondaryButton } from '../Core/ActionFooter'

import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'
import NewEntryDatePicker from './NewEntryDatePicker'
import NewEntryDeleAction from './NewEntryDeleAction'

import useEntries from '../../hooks/useEntries'

export default function NewEntryForm({ navigation }) {

    const expenseSelected = navigation.getParam('item', {
        id: null,
        amount: '0',
        category: { id: null, name: 'Selecione' },
        entryAt: new Date()
    })

    const [, saveEntry, deleteEntry] = useEntries()

    const [amount, setAmount] = useState(String(expenseSelected.amount))
    const [category, setCategory] = useState(expenseSelected.category)
    const [prefix, setPrefix] = useState(expenseSelected.amount <= 0 ? false : true)
    const [entryAt, setEntryAt] = useState(expenseSelected.entryAt)

    function isValid() {
        return parseFloat(amount) !== 0 ? true : false
    }

    async function onSave() {
        let val = parseFloat(amount)

        console.log(`onSave :: data => ${JSON.stringify(entryAt)}`);

        const value = {
            id: getUUID(),
            amount: val,
            category: category,
            entryAt: entryAt
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
        console.log('NewEntryForm -> prefixFunc :: ', !prefix);

    }
    function onChangeCategory(newCategory) {
        setCategory(newCategory)
        console.log('onChangeCategory :: ', newCategory);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInputs}>
                <NewEntryInput value={amount} onChangeValue={setAmount} prefixFunc={prefixFunc} prefixState={prefix} />
                <NewEntryCategoryPicker oldCategory={category} onChangeCategory={onChangeCategory} prefixState={prefix} />
            </View>

            <View style={styles.containerFormActions}>
                <NewEntryDatePicker value={entryAt} onChange={setEntryAt}/>
                <TouchableOpacity style={styles.actionsBtns}>
                    <Text style={styles.btn}>Cam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionsBtns}>
                    <Text style={styles.btn}>Loc</Text>
                </TouchableOpacity>
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