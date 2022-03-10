import React from 'react';
import { Props } from './types/types';
import styles from './operation.module.css';
import { OperationButton } from '../OperationButton/OperationButton';

export const Operation = ({ dispatch }: Props) => {
	return (
		<div className={styles.container}>
			<div>
				<OperationButton operation='÷' dispatch={dispatch} />
			</div>
			<div>
				<OperationButton operation='*' dispatch={dispatch} />
			</div>
			<div>
				<OperationButton operation='-' dispatch={dispatch} />
			</div>
			<div>
				<OperationButton operation='+' dispatch={dispatch} />
			</div>
			<div>
				<OperationButton operation='=' dispatch={dispatch} />
			</div>
		</div>
	);
};
