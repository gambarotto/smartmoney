import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors'


export default function NewEntryDatePicker({value, onChange}) {
    
    const [visibleDate, setVisibleDate] = useState(false)
    
    function onChangeValue(date){
        onChange(date)
        onCancel()
    }
    function onCancel(){
        setVisibleDate(false)
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => setVisibleDate(true)}>
                <Icon name='today' size={30} color={Colors.white} />
            </TouchableOpacity>

            <DateTimePicker 
                mode='date'
                datePickerModeAndroid='calendar'
                titleIOS='Data do Débito'
                cancelTextIOS='Cancelar'
                confirmTextIOS='Ok'
                date={value}
                isVisible={visibleDate}
                onConfirm={date => onChangeValue(date)}
                onCancel={onCancel}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:Colors.asphalt,
        alignItems:'center',
        justifyContent:'center'
    }
})