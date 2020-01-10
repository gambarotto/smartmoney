import React, { useState } from 'react';

import InputMoney from '../../Core/InputMoney'

const NewEntryInput = ({ value, onChangeValue, prefixFunc, prefixState }) => {

    return (
            <InputMoney
                value={value}
                onChangeValue={onChangeValue}
                prefixFunc={prefixFunc}
                prefixState={prefixState}
                initialAmount={false} />

    )
}

export default NewEntryInput;
