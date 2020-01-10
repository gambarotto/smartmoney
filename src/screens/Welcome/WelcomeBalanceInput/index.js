import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import InputMoney from '../../../components/Core/InputMoney'
import Colors from '../../../styles/Colors';

// import { Container } from './styles';

export default function WelcomeBalanceInput({amount, onChangeValue}) {
  return (
    <View>
        <Text style={styles.label}>Informe seu saldo</Text>
        <InputMoney value={amount} onChangeValue={onChangeValue} />
    </View>
  );
}

const styles = StyleSheet.create({
    label: {
        color:Colors.white,
        fontSize:28,
        textAlign:'center'
    },
})