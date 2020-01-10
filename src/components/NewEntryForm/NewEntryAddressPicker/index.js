import React from 'react';
import { Alert, View, TouchableOpacity, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/Colors'
import {gcp} from '../../../config/keys'

export default function NewEntryAddressPicker({ address, onChange }) {

    const getLocation = (latitude, longitude) => {
        Geocoder.init(gcp.keyGeo)

        Geocoder.from({ latitude, longitude })
            .then(json => {
                const formattedAddress = json.results[0].formatted_address

                Alert.alert(
                    'Localização',
                    formattedAddress,
                    [
                        {
                            text: 'Cancelar',
                            onPress: () => { },
                            style: 'cancel'
                        },
                        {
                            text: 'Confirmar',
                            onPress: () => {
                                onChange({ latitude, longitude, address: formattedAddress })
                            }
                        }
                    ]

                )
                console.log(formattedAddress)

            })
            .catch(e => {
                console.error('NewEntryAddressPicker/ getLocation :: ', e)
            })
    }

    const getPosition = () => {
        Geolocation.getCurrentPosition(pos => {
            const latitude = pos.coords.latitude
            const longitude = pos.coords.longitude

            getLocation(latitude, longitude)

            console.log(`lat. ${latitude}, lon. ${longitude}`)
        }, error => {
            console.error('NewEntryAddressPicker/ getCurrentPosition :: ', error)
        })
    }

    function onPressButton() {
        if (address) {
            Alert.alert(
                'Localização',
                address,
                [
                    {
                        text: 'Apagar',
                        onPress: () => {
                            onChange({ latitude: null, longitude: null, address: null })
                        },
                        style: 'cancel'
                    },
                    {
                        text: 'Ok',
                        onPress: () => {
                            console.log('Ok press')
                        }
                    }
                ]

            )
        } else {
            getPosition()
        }
    }
    return (
        <View style={[styles.button, address && {backgroundColor: Colors.blue}]} >
            <TouchableOpacity onPress={onPressButton}>
                <Icon name='person-pin' size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
}
//AIzaSyBRevQ0rmPLTCgkHn-rwAPKnPoLv80g204
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