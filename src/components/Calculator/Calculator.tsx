import React, { useState } from 'react';
import { formula } from '../Formula/types/types';
import { Digit } from '../Digit/Digit';
import { Formula } from '../Formula/Formula';
import { Operators } from '../Operators/Operators';
import { Result } from '../Result/Result';
import styles from './calculator.module.css';

export interface IDefaultState {
	formula: formula;
	total: number;
}
export const Calculator = () => {
	const defaultState: IDefaultState = {
		formula: {
			firstValue: 0,
			operator: '',
			secondValue: 0,
		},
		total: 0,
	};

	const [result, setResult] = useState(defaultState);

	return (
		<div className={styles.container}>
			<Formula operation={result.formula} />
			<Result>{result.total ? result.total : result.formula.firstValue}</Result>
			<Digit />
			<Operators />
		</div>
	);
};
