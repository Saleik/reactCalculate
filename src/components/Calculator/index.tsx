import React, { useState } from 'react';
import { formula } from '../../types/types';
import Digit from '../Digit';
import Formula from '../Formula';
import Operators from '../Operators';
import Result from '../Result';
import styles from './index.module.css';
export interface IDefaultState {
	formula: formula;
	total: number;
}
const Calculator = () => {
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

export default Calculator;
