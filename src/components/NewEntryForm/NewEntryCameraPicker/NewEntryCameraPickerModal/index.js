import React, { useState } from 'react';
import { Alert, Modal, View, ImageBackground, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../../styles/Colors'

export default function NewEntryCameraPickerModal({
    isVisible,
    photo,
    onChangePhonto,
    onDelete,
    onClose
}) {

    const [camera, setCamera] = useState()

    async function onTakePicture() {
        try {
            const { uri } = await camera.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true
            })

            onChangePhonto(uri)
        } catch (error) {
            console.error('NewEntryCameraPickerModal :: onTakePicture error = ', error)
            Alert.alert('Erro', 'Erro ao tirar a foto')
        }
    }


    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={isVisible} >
            {photo ? (
                <ImageBackground
                    source={{ uri: photo }}
                    style={styles.imagePreview}>

                    <View style={styles.pictureButtonsActions}>
                        <Icon
                            name="delete"
                            size={50}
                            color={Colors.white}
                            onPress={onDelete}
                            style={styles.buttonClose}
                        />
                        <Icon
                            name="check"
                            size={50}
                            color={Colors.white}
                            onPress={onClose}
                            style={styles.buttonCheck}
                        />
                    </View>
                </ImageBackground>
            ) : (
                    <RNCamera
                        ref={(ref) => setCamera(ref)}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permissão para usar a câmera',
                            message: 'Precisamos da sua permissão para usar a câmera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancelar'
                        }}
                        captureAudio={false}>
                        <Icon
                            name="photo-camera"
                            size={40}
                            color={Colors.white}
                            onPress={onTakePicture}
                            style={styles.buttonTakePicture}
                        />
                        <Icon
                            name="close"
                            size={50}
                            color={Colors.white}
                            onPress={onClose}
                            style={styles.buttonDeletePicture}
                        />
                    </RNCamera>
                )}
        </Modal>
    );
}

const styles = StyleSheet.create({
    imagePreview: {
        flex: 1
    },
    pictureButtonsActions: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 16
    },
    buttonClose:{
        marginLeft:16
    },
    buttonCheck:{
        marginLeft:16
    },
    camera: {
        flex: 1
    },
    buttonTakePicture: {
        flex: 0,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20
    },
    buttonDeletePicture: {
        flex: 0,
        position: 'absolute',
        top: 20,
        right: 20
    },

})