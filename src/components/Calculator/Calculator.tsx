import React, { useReducer } from 'react';
import { Digit } from '../Digit/Digit';
import { Output } from '../Output/Output';
import { Operation } from '../Operation/Operation';
import styles from './calculator.module.css';
import { logicReducer } from '../../Reducers/logicReducer';

export const Calculator = () => {
	const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
		logicReducer,
		{}
	);

	return (
		<div className={styles.container}>
			<Output
				previousOperand={previousOperand}
				currentOperand={currentOperand}
				operation={operation}
			/>
			<Digit dispatch={dispatch} />
			<Operation dispatch={dispatch} />
		</div>
	);
};
