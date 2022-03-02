import React from 'react';
import { Props } from './types/types';
import styles from './formula.module.css';

export const Formula = ({ operation }: Props) => {
	return (
		<div className={styles.container}>
			{operation.firstValue
				? `${operation.firstValue}+${operation.operator}+${operation.secondValue}`
				: '0'}
		</div>
	);
};
