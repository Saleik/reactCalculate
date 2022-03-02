import React from 'react';
import styles from './button.module.css';

type Props = {
	children: React.ReactNode;
	value: string | number;
};
export const Button = ({ children, value }: Props) => {
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
