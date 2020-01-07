import { useState, useEffect } from 'react'

import { getBalance } from '../services/Balance'

const useBalance = () => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        async function loadBalance(){
            const data = await getBalance()
            setBalance(parseFloat(data.toFixed(2)))
        }
        loadBalance()
    },[])

    return [balance]
}

export default useBalance