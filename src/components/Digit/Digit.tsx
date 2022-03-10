import React from 'react';
import styles from './digit.module.css';
import { DigitButton } from '../DigitButton/DigitButton';
import { Props } from './types/types';
import { ACTIONS_TYPES } from '../../Reducers/types/types';

export const Digit = ({ dispatch }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.span_2}>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: ACTIONS_TYPES.CLEAR })}>
					AC
				</button>
			</div>
			<div>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: ACTIONS_TYPES.DELETE_VALUE })}>
					DEL
				</button>
			</div>
			<div>
				<DigitButton digit='9' dispatch={dispatch} />
				<div></div>
				<DigitButton digit='8' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='7' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='6' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='5' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='4' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='3' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='2' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='1' dispatch={dispatch} />
			</div>
			<div>
				<DigitButton digit='0' dispatch={dispatch} />
			</div>
			<div className={styles.span_3}>
				<DigitButton digit='.' dispatch={dispatch} />
			</div>
		</div>
	);
};
