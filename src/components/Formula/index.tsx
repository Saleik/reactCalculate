import React from 'react';
import { formula } from '../../types/types';
import styles from './index.module.css';

type Props = {
	operation: formula;
};

const Formula = ({ operation }: Props) => {
	return (
		<div className={styles.container}>
			{operation.firstValue
				? `${operation.firstValue}+${operation.operator}+${operation.secondValue}`
				: '0'}
		</div>
	);
};

export default Formula;
