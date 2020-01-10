import React from 'react';
import { Modal, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter'
import Colors from '../../styles/Colors'

export default function RelativeDaysModal({ isVisible, onConfirm, onCancel }) {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365]

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={isVisible}>
        <View style={styles.modal}>
          <FlatList
            data={relativeDays}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.modalItem} onPress={() => onConfirm(item)}>
                <Text style={styles.txtDias}>
                  {parseFloat(item) > 1 ? `${item} dias` : `${item} dia`}
                </Text>
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
    backgroundColor: Colors.background,

  },
  modalItem: {
    flex: 1,
    minHeight: 50,
    borderRadius: 4,
    backgroundColor: Colors.asphalt,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 5
  },
  txtDias: {
    color: Colors.white,
    fontSize:16
  }
})
