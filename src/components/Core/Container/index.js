import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/Colors'


// import { Container } from './styles';

const Container = ({
    children,
    title,
    actionLabelText,
    actionButtonText,
    
    onPressActionButton,
    iconName }) => (

        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
            {(actionLabelText || actionButtonText) && (
                <View style={styles.actionContainer}>
                    {actionLabelText && <Text style={styles.actionLabel}>{actionLabelText}</Text>}
                    {actionButtonText && (
                        <TouchableOpacity style={styles.actionButton} onPress={onPressActionButton}>
                            {iconName && <Icon name={iconName} style={styles.actionButtonIcon} />}
                            <Text style={styles.actionButtonText}>{actionButtonText}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
        </View>
    )

export default Container;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.asphalt,
        borderRadius: 4,
        margin: 5,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        padding: 8
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 10,
        color: Colors.white
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:5
    },
    actionLabel: {
        fontSize: 12,
        color: Colors.white,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonText: {
        fontSize: 12,
        color: Colors.white,
    },
    actionButtonIcon: {
        fontSize: 12,
        marginRight: 5,
        color: Colors.white,
    },
})