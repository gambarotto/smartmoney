import React from 'react';
import { Modal, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter'

import useCategories from '../../hooks/useCategories'

import Colors from '../../styles/Colors'

export default function CategoryModal({categoryType, onConfirm, onCancel, isVisible }) {
    
    const [debitCategories, creditCategories, allCategories] = useCategories([])

    return (
        <Modal
            transparent={false} animationType='slide' visible={isVisible}>
            <View style={styles.modal}>
                <FlatList
                    data={
                    categoryType === 'all' 
                    ? allCategories 
                    : categoryType ==='credit' 
                    ? creditCategories 
                    : debitCategories
                    }
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => onConfirm(item)}
                            style={styles.modalItem}>
                            <Text style={styles.modalItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <ActionFooter>
                    <ActionPrimaryButton title='Fechar' onPress={() => onCancel(false)} />
                </ActionFooter>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background
    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20
    },
    modalItemText: {
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
    },

})