import Image from 'next/image';
import icon from './SymbolX2.svg';
import React, { ButtonHTMLAttributes } from 'react';
import Symbol from './SymbolX2.svg';
import './CloseButton.style.scss';

const CloseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({className, ...props}) => {
    const classes = ['close_button'];

    if (className) {
        classes.push(className);
    }
    
    return (
        <button className={classes.join(' ')} {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className={"close_button__image"}
            ><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
        </button>
    );
};

export default CloseButton;