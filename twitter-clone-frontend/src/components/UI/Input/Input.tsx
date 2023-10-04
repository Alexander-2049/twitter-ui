"use client"
import React, { useState } from 'react';
import './Input.style.scss';
import './hide-placeholder.scss';
import {v4 as uuidv4} from 'uuid';

/*
 * Attributes:
 * - type: text/email/password
 * - required: true/false
 * - minlength: number
 * - maxlength: number
 * - 
 * 
*/

interface Props {
    type?: 'text' | 'email' | 'password';
    onChange?: (e: any) => void;
    className?: string;
    styleWrapper?: React.CSSProperties;
    placeholder?: string;
    value: string;
    name?: string;
    tabIndex?: number;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    errors?: string[];
    id?: string;
    minLength?: number;
    maxLength?: number;
}

const Input: React.FC<Props> = ({
    type = 'text',
    onChange,
    className,
    styleWrapper,
    placeholder,
    value,
    name,
    tabIndex = 0,
    disabled = false,
    readOnly = false,
    required = false,
    errors = [],
    id,
    minLength,
    maxLength,
}: Props) => {
    const [generatedId] = useState(
        `input-${type}-${uuidv4()}`,
    );
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`input-wrapper ${className || ''}`} style={styleWrapper}>
            <div className={`input__container ${isFocused ? 'input__container--focus' : value === '' ? '' : 'input__container--not-empty'}`}>
                <label
                    className='input__label'
                    htmlFor={id || generatedId}
                >
                    {placeholder}
                </label>
                <input
                    type={type}
                    onChange={onChange}
                    className={`input__input input__input-hide_placeholder`}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    tabIndex={tabIndex}
                    id={id || generatedId}
                    minLength={minLength}
                    maxLength={maxLength}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
};

export default Input;