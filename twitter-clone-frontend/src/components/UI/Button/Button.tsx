import React, { ButtonHTMLAttributes } from 'react';
import './Button.style.scss';

interface Props {
    variation?: 'primary' | 'secondary' | 'tertiary' | 'black';
}

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({ variation, className, children, ...props }) => {
    const classes = ['button', variation || 'primary'];

    if (className) {
        classes.push(className);
    }

    return (
        <button className={classes.join(' ')} {...props}>
            {children}
        </button>
    );
};

export default Button;
