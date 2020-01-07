import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../../styles/Colors'

export const ActionPrimaryButton = ({title,onPress}) =>{
    return (
        <TouchableOpacity style={styles.ActionPrimaryButtonContainer} onPress={onPress}>
            <Text style={styles.ActionPrimaryButtonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export const ActionSecondaryButton = ({title,onPress}) => {
    return (
        <TouchableOpacity style={styles.ActionSecondaryButtonContainer} onPress={onPress}>
            <Text style={styles.ActionSecondaryButtonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default function ActionFooter({children}) {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            {children}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:Colors.background,
      paddingVertical:10
    },
    inner:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        //alignItems: 'center'
    },
    ActionPrimaryButtonContainer:{
                // height:50,
        width:130,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical:10
        //backgroundColor:Colors.green
    },
    ActionPrimaryButtonTitle:{
        fontSize:16,
        color:Colors.green,
        fontWeight:'bold'
    },
    ActionSecondaryButtonContainer:{
                // height:50,
        width:130,
        borderRadius: 30,
        //borderWidth: 1.5,
        borderColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical:10
    },
    ActionSecondaryButtonTitle:{
        fontSize:16,
        color:Colors.white,
        
    }
  })
