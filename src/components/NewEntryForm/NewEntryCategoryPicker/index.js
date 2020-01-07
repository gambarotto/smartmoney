import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList, StyleSheet } from 'react-native';

import CategoryModal from '../../CategoryModal'
import Colors from '../../../styles/Colors'

const NewEntryCategoryPicker = ({prefixState, oldCategory, onChangeCategory}) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [category, setCategory] = useState(oldCategory)

    function onChangeCategoryPicker(newCategory){
        setCategory(newCategory)
        onChangeCategory(newCategory)
        onCancel()
    }
    function onCancel(){
        setModalVisible(false)
    }

    return (
        <View>
            <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.pickerText}>{category.name}</Text>
            </TouchableOpacity>
            <CategoryModal 
                isVisible={modalVisible} 
                categoryType={ prefixState ? 'credit' : 'debit' } 
                onConfirm={onChangeCategoryPicker} 
                onCancel={onCancel}/>
        </View>
    )
}

export default NewEntryCategoryPicker;

const styles = StyleSheet.create({
    pickerButton: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        padding: 20
    },
    pickerText: {
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center',
    },
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
    modalCloseButton: {
        backgroundColor: Colors.background,
        borderColor: Colors.green,
        borderWidth: 2,
        alignItems:'center',
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal:20,
        padding: 10
    },
    modalCloseButtonText:{
        fontSize:16,
        fontWeight:'bold',
        color: Colors.green,
        alignSelf:'center'
    }
})

// <Modal
// transparent={false} animationType='slide' visible={modalVisible}>
// <View style={styles.modal}>
//     <FlatList
//         data={ prefixState ? creditCategories : debitCategories}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//             <TouchableOpacity 
//                 onPress={() => onChangeCategoryPicker(item)}
//                 style={styles.modalItem}>
//                 <Text style={styles.modalItemText}>{item.name}</Text>
//             </TouchableOpacity>
//         )}
//     />
//     <ActionFooter>
//         <ActionPrimaryButton title='Fechar' onPress={() => setModalVisible(false)}/>
//     </ActionFooter>
// </View>
// </Modal>