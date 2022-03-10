import React from 'react';
import { ACTIONS_TYPES } from '../../Reducers/types/types';
import styles from './operationButton.module.css';
import { Props } from './types/types';

export const OperationButton = ({ operation, dispatch }: Props) => {
	return (
		<button
			onClick={
				operation === '='
					? () =>
							dispatch({
								type: ACTIONS_TYPES.EVALUATE,
							})
					: () =>
							dispatch({
								type: ACTIONS_TYPES.CHOOSE_OPERATION,
								payload: { operation: operation },
							})
			}
			className={styles.button}>
			{operation}
		</button>
	);
};
