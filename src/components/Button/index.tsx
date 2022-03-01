import React from 'react';
import styles from './index.module.css';

type Props = {
	children: React.ReactNode;
};
const Button = ({ children }: Props) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;
