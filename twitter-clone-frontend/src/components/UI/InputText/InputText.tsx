"use client"
import React, { ButtonHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import './InputText.style.scss';

interface Props {
  placeholder?: string;
  limit?: number;
}

const InputText: React.FC<Props & ButtonHTMLAttributes<HTMLInputElement>> = ({ placeholder, limit, value, defaultValue, onChange, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const [inputValue, setInputValue] = useState(value || ''); // Initialize with value or an empty string

  useEffect(() => {
    setInputValue(value || ''); // Update inputValue when value prop changes
  }, [value]);

  const focusToInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  }, [inputRef]);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update inputValue when input value changes
    if(onChange) {
        onChange(e);
    }
  };

  return (
    <div className={`input_text_wrapper ${isFocused ? 'input_text_wrapper-focus' : ''} ${inputValue ? 'input_text_wrapper-with-text' : ''}`} onClick={focusToInput}>
      <span className="input_text__placeholder">{placeholder}</span>
      <input
        ref={inputRef}
        placeholder={placeholder}
        type="text"
        value={inputValue}
        className="input_text__input"
        onMouseDown={focusToInput}
        onFocus={focusToInput}
        onBlur={handleBlur}
        onChange={handleChange} // Use handleChange to update inputValue
      />
    </div>
  );
};

export default InputText;
