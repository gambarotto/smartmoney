import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal'
import Colors from '../../../styles/Colors'

export default function NewEntryCameraPicker({photo, onChangePhoto}) {

    const [showModal, setShowModal] = useState(false)

    function onChangePhotoPress(newPhoto){
        onChangePhoto(newPhoto)
        onClosePress()
    }

    function onDeletePress(){
        onChangePhoto(null)
        onClosePress()
    }

    function onClosePress(){
        setShowModal(false)

    }

    return (
        <View>
            <TouchableOpacity 
                style={[styles.button, photo && {backgroundColor: Colors.blue}]} 
                onPress={() => setShowModal(true)}
                >
                <Icon name="photo-camera" size={30} color={Colors.white} />
            </TouchableOpacity>
            <NewEntryCameraPickerModal 
                isVisible={showModal} 
                onDelete={onDeletePress} 
                onChangePhonto={onChangePhotoPress}
                onClose={onClosePress}
                photo={photo} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.asphalt,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
})