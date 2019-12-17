import {getRealm} from './Realm'
import getNewUUID from './UUID'

export const getEntries = async() => {
    const realm = await getRealm()

    const entries = realm.objects('Entry')

    //return JSON.stringify(entries)
    return entries

}

export const deleteEntry = async (data) => {
    const realm = await getRealm()

    try{
        realm.write(() => {
            realm.delete(data)
        })

    }catch(e){
        console.log(e);

    }
}

export const saveEntry = async (value, idSelected) => {
    const realm = await getRealm()
    let data ={}
    const { id, amount, entryAt } = value

    try{
        if(!idSelected.id) console.log('fffffffff')
        console.log(value)
        realm.write(() => {
            data = {
                id: idSelected.id ? idSelected.id : id,
                amount: amount,
                entryAt: idSelected.entryAt ? idSelected.entryAt : entryAt,
                isInit: false,
            }
            realm.create('Entry', data, true)
        })
        // console.log(
        //     'saveEntry :: ', JSON.stringify(data)
        // )
    }catch(error) {
        console.error(
            'saveEntry :: error on save object: ', JSON.stringify(this.data)
        )
        alert.alert('Erro ao Salvar')
    }

    return data

}


export const deleteAll = async () => {
    const realm = await getRealm()

    const entries = realm.objects('Entry')
    try{
        realm.write(() => {
            realm.delete(entries)
        })

    }catch(e){
        console.log(e);

    }
}