import React from 'react';
import { ACTIONS_TYPES } from '../../Reducers/types/types';
import styles from './digitButton.module.css';
import { Props } from './types/types';

export const DigitButton = ({ digit, dispatch }: Props) => {
	return (
		<button
			onClick={() =>
				dispatch({
					type: ACTIONS_TYPES.ADD_VALUE,
					payload: { digit: digit },
				})
			}
			className={styles.button}>
			{digit}
		</button>
	);
};
