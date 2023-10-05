"use client"
import React, { useState, useEffect } from 'react';
import Input from '../UI/Input/Input';

const InputTest = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");

    const [errors, setErrors] = useState<string[]>([]);
    useEffect(() => {
        let isValid = true;
        if(value5.length > 0) {
            isValid = false;
            if(isValidEmail(value5)) {
                isValid = true;
            }
        }
        
        if(!isValid) {
            setErrors(['Please enter a valid email.'])
        } else {
            setErrors([]);
        }

    }, [value5])

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
            <br/>
            <Input
                value={value4}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue4(e.target.value) }}
                placeholder='Disabled input'
                type='text'
                disabled
            />
            <br/>
            <Input
                value={value5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue5(e.target.value) }}
                placeholder='Errors test'
                type='text'
                errors={errors}
            />
        </div>
    );
};

function isValidEmail(email: string): boolean {
    // Regular expression for a basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return emailRegex.test(email);
}
  

export default InputTest;