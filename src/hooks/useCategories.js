import { useState, useEffect } from 'react'

import { 
    getAllCategories, 
    getCreditCategories, 
    getDebitCategories, 
    getInitCategory 
} from '../services/Categories'

const useCategories = () => {

    const [debitCategories, setDebitCategories] = useState([])
    const [creditCategories, setCreditCategories] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [initCategory, setInitCategory] = useState([])

    useEffect(() => {

        let didMount = true
        async function loadData() {
            try {
                if (didMount) {
                    setDebitCategories(await getDebitCategories())
                    setCreditCategories(await getCreditCategories())
                    setAllCategories(await getAllCategories())
                    setInitCategory(await getInitCategory())
                }
            } catch (e) {
                console.log(`NewEntryCategoryPicker :: useEffect error loadData ${e}`)
            }
        }
        loadData()
        console.log(`NewEntryCategoryPicker :: useEffect`)

        return () => {
            didMount = false
        }
    }, [])

    return [debitCategories, creditCategories, allCategories, initCategory]
}

export default useCategories