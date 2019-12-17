import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux'

// import { Container } from './styles';

const BalanceLabel = () => {
    
    const currentValue = useSelector(state => state.currentValue)

    return (
    <View style={styles.container}>
        <Text style={styles.label}>
            Saldo Atual
        </Text>
        <Text style={styles.label}>
            {currentValue}
        </Text>
    </View>
    )
}

export default BalanceLabel;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})