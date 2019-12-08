import * as React from 'react'
import TextField from './textField';
import {useState} from "react";

export default { title: 'TextField' };

export const textField = () => {
    const [value, setValue] = useState("hello world");

    return <TextField value={value} onChange={(value: string) => {setValue(value)}} />
};

