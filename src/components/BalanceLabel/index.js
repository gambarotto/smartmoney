import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import Currency from '../Currency'
import useBalance from '../../hooks/useBalance'

import Colors from '../../styles/Colors'

const BalanceLabel = () => {

    const [balance] = useBalance()

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <LinearGradient style={styles.panel} colors={[Colors.violet, Colors.blue]}>
                <Text style={styles.value}>
                    <Currency value={balance} />
                </Text>
            </LinearGradient>
        </View>
    )
}

export default BalanceLabel;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        fontSize:12,
        color:Colors.white,
        fontWeight:'bold',
    },
    panel:{
        minWidth:150,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    value:{
        fontSize:28,
        color:Colors.white
    }
})