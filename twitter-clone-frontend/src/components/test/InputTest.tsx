"use client"
import React, { useState } from 'react';
import Input from '../UI/Input/Input';

const InputTest = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    return (
        <div>
            <Input
                value={value1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue1(e.target.value) }}
                placeholder='Name'
            />
            <br/>
            <Input
                value={value2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue2(e.target.value) }}
                placeholder='Email, phone number, nickname, trigonometry'
                type='email'
            />
            <br/>
            <Input
                value={value3}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue3(e.target.value) }}
                placeholder='Password'
                type='password'
            />
        </div>
    );
};

export default InputTest;