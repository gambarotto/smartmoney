import {getRealm} from './Realm'
import getUUID from '../services/UUID'
import moment from '../vendors/moment'

export const getEntries = async(days, category) => {
    let realm = await getRealm()

    realm = realm.objects('Entry')

    if(days > 0){
        
        const date = moment()
            .subtract(days, 'days')
            .toDate()

        realm = realm.filtered('entryAt>=$0', date)
    }

    if(category && category.id){
        realm = realm.filtered('category == $0', category)
    }

    const entries = realm.sorted('entryAt',true)
    
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

export const saveEntry = async (value, idSelected ) => {
    const realm = await getRealm()
    let data ={}
    //const { id, amount, entryAt, category, photo, address, latitude, longitude } = value

    try{
       // console.log(value)
        realm.write(() => {
            data = {
                id: value.isInit ? getUUID() : value.id || idSelected.id || getUUID(),
                amount: value.amount || 0,
                entryAt: value.entryAt || new Date(),
                isInit: value.isInit || false,
                category: value.category,
                photo:value.photo || null,
                address: value.address || null,
                //address: idSelected.id ? address : address,
                latitude: value.isInit ? null : value.latitude || idSelected.latitude || null,
                longitude: value.isInit ? null : value.longitude || idSelected.latitude || null
            }
            realm.create('Entry', data, true)
        })
        console.log(
            'saveEntry :: ', JSON.stringify(data)
        )
    }catch(error) {
        console.error(
            'saveEntry :: error on save object: ', error
        )
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