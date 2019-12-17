import { arrayExpression } from "@babel/types"


const INITIAL_STATE = {
    currentValue: 1987.30,
    expenseSelected:null,
    newExpense: { id: 0, title: 'Alimentação', value: 0 },
    totalExpenses: [
        { id: 0, description: 'Alimentação', value: 100 },
        { id: 1, description: 'Lazer', value: 256 },
        { id: 2, description: 'Mercado', value: 36 },
        { id: 3, description: 'Gasolina', value: 98 },
        { id: 4, description: 'Carro', value: 167 },
    ],
    expenseList: [
        // {id:0, description:'Alimentação', value:10},
        // {id:1, description:'Lazer', value:56},
        // {id:2, description:'Mercado', value:47.50},
        // {id:3, description:'Gasolina', value:50},
        // {id:4, description:'Gasolina', value:40},
        // {id:5, description:'Lazer', value:28.50},
    ],
    loadingExpense: false,
    errorExpense: null,

    loadingExpenseTotal: false,
    errorTotalExpense: null
}

export default function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'ATT_DATA':
            const { data } = action
            const arr = []
            data.map(item => arr.push(item))
            
            return { ...state, expenseList:arr, loadingExpense: true }
        case 'ATT_EXPENSE_SELECTED':
            return {...state, expenseSelected:action.item}
        case 'ATT_EXPENSE_LIST':
            
            return {
                ...state, 
                expenseList:action.updated ? action.data : [...state.expenseList, action.data]
            }
            
        case 'ATT_EXPENSE_LIST_DELETE':
            return {...state, expenseList: action.data}
        case 'DELETE_EXPENSE_SELECTED':
            return {...state, expenseSelected:null}
        default: 
            return state
    }


}