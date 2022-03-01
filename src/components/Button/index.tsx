import React, { ReactEventHandler } from 'react';
import styles from './index.module.css';

type Props = {
	children: React.ReactNode;
	value: string | number;
};
const Button = ({ children, value }: Props) => {
	const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log((e.target as HTMLTextAreaElement).value);
	};
	return (
		<button onClick={buttonHandler} className={styles.button} value={value}>
			{children}
		</button>
	);
};

export default Button;
