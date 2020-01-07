import React, {useState} from 'react';

import { View, TouchableOpacity, Text,StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import Colors from '../../../styles/Colors'

const NewEntryInput = ({ value, onChangeValue, prefixFunc, prefixState }) => {
    
    //const [prefix, setPrefix] = useState(value <= 0 ? false : true)
    const [prefix, setPrefix] = useState(prefixState)


    function changePrefix(){
        setPrefix(!prefix)
        onChangeValue(value * -1)
        prefixFunc(!prefix)
        console.log('NewEntryInput -> prefixFunc :: ', !prefix);
        
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={changePrefix}
                style={styles.containerPrefix}>
                <Text style={styles.textPrefix}>{prefix ? '' : '-'}</Text>
                <Text style={styles.textPrefixRs}>R$</Text>
            </TouchableOpacity>
            <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: ''
                }}
                placeholder='Valor'
                includeRawValueInChangeText={true}
                onChangeText={(maskedValue, rawValue) => {
                    prefix ? onChangeValue(rawValue) : onChangeValue(rawValue * -1)
                }}
                value={value} />
        </View>
    )
}

export default NewEntryInput;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        paddingHorizontal:20,
        paddingVertical:10,
    },
    input: {
        flex:1,
        fontSize: 28,
        color: Colors.white,
        textAlign: 'right',
        //paddingRight:10
    },
    containerPrefix:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        //paddingHorizontal:10
    },
    textPrefix:{
        fontSize: 28,
        color: Colors.white,
        minWidth:8
    },
    textPrefixRs:{
        fontSize: 28,
        color: Colors.white,
    },
})