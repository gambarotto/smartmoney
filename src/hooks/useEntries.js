import { useState, useEffect } from 'react'

import { getEntries, deleteEntry, deleteAll, saveEntry } from '../services/Entries'

const useEntries = ( days = 7, category) => {
    const [entries, setEntries] = useState([])

    useEffect(() => {

        async function loadEntries(){
            setEntries(await getEntries(days, category))
        }

        loadEntries()

    },[days,category])

    return [entries, saveEntry, deleteEntry]
}
export default useEntries