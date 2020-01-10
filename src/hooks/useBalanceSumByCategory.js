import { useState, useEffect } from 'react'
import { getBalanceSumByCategory } from '../services/Balance'

export default function useBalanceSumByCategory(days = 7){

    const [balaceSum, setBalanceSum] = useState([])

    useEffect(() => {
        async function loadBalanceSumByCategory(){
            const data = await getBalanceSumByCategory(days)
            setBalanceSum([...data])
        }

        loadBalanceSumByCategory()
    },[days])

    return [balaceSum]
}