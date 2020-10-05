import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children?: ReactNode;
    text: string;
    type?: 'contained' | 'outlined';
}

const Button: FunctionComponent<ButtonProps> = ({
    children,
    text,
    type
}: ButtonProps) => {
    return (
        <div className={styles['button']}>
            {children ?? text}
        </div >
    );
}

Button.displayName = 'Button';
Button.defaultProps = {
    children: undefined,
    type: 'contained'
}

export default Button;
export type {
    ButtonProps
}