import { useState, useEffect } from 'react'

import {getBalanceSumByDate} from '../services/Balance'

export default function useBalanceSumByDate(days = 7){


    const [balanceSum, setBalanceSum] = useState([])

    useEffect(() => {
        
        async function loadBalanceSumByDate(){
            const data = await getBalanceSumByDate(days)
            setBalanceSum([...data])
            //console.log('useBalanceByDate')

        }

        loadBalanceSumByDate()
    },[days])

    return [balanceSum]
}