import { useState, useEffect } from 'react'

import { getBalance } from '../services/Balance'

const useBalance = () => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        async function loadBalance(){
            const data = await getBalance()
            setBalance(parseFloat(data))
            //console.log('useBalance')
        }
        loadBalance()
    },[])

    return [balance]
}

export default useBalance