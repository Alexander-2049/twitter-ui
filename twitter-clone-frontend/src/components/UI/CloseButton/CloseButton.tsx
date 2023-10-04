import Image from 'next/image';
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
            <Image
              src={Symbol}
              alt="Close Button"
              className={"close_button__image"}
              priority
            />
        </button>
    );
};

export default CloseButton;