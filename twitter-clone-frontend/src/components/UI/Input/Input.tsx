"use client"
import React, { useEffect, useState } from 'react';
import './Input.style.scss';
import './hide-placeholder.scss';
import {v4 as uuidv4} from 'uuid';

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
    const [generatedId, setGeneratedId] = useState<string | undefined>();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setGeneratedId(`input-${type}-${uuidv4()}`)
    }, [type])

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div
            className={`input-wrapper ${errors.length > 0 ? 'input--error' : ''} ${className || ''}`}
            style={styleWrapper}
        >
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
                    // placeholder={placeholder} // it causes placeholder repeating for 2 times "name within name"
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
            <ul className='input__error_ul'>
                {errors.map((err) => (
                    <li
                        key={`err-list-${id || generatedId}`}
                        className='input__error_li'
                    >
                        {err}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Input;