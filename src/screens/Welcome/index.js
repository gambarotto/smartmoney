import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter'
import WelcomeMessage from './WelcomeMessage'
import WelcomeBalanceInput from './WelcomeBalanceInput'

import useCategories from '../../hooks/useCategories'
import { saveEntry } from '../../services/Entries'
import {setInitialized} from '../../services/Welcome'


import Colors from '../../styles/Colors'
import Logo from '../../assets/logo-white.png'

export default function Welcome({ navigation }) {

    //const [,saveEntry,] = useEntries()
    const [,,,initCategory] = useCategories()
    const [amount, setAmount] = useState(0)

    function onSavePress(){
//        console.log(initCategory)

        saveEntry({
            amount,
            isInit:true,
            category:initCategory[0]
            })
        setInitialized()
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>
            <WelcomeMessage />
            <WelcomeBalanceInput amount={amount} onChangeValue={setAmount} />

            <ActionFooter>
                <ActionPrimaryButton title='Continuar' onPress={onSavePress} />
            </ActionFooter>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10
    },
    logo: {
        alignItems: 'center',
        marginTop: 20
    }
})