import React from 'react';
import { Props } from './types/types';
import styles from './output.module.css';
import { formatOperand } from '../../utils/formatOperand';

export const Output = ({
	previousOperand,
	currentOperand,
	operation,
}: Props) => {
	return (
		<div className={styles.container}>
			<div>
				{previousOperand === '' || previousOperand == null
					? previousOperand
					: formatOperand(previousOperand)}
				{operation}
			</div>
			<div className={styles.currentOperand}>
				{currentOperand === '' || currentOperand == null
					? currentOperand
					: formatOperand(currentOperand)}
			</div>
		</div>
	);
};
