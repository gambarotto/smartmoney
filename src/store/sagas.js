import { takeEvery, put, call } from 'redux-saga/effects'
import { getEntries } from '../services/Entries'

function* asyncGetEntriesRealm() {
        //yield console.log('saga')

    try {
        const data = yield getEntries()
        console.log('saga')
        yield put({ type: 'SUCCESS_ATT_DATA', entries:data })

    }catch(err){
        yield put({ type: 'FAILURE_ATT_DATA', error:err })
    }
}

export default function* root() {
    yield [
        takeEvery('ATT_DATA', asyncGetEntriesRealm)
    ]
}