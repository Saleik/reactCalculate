import { evaluate } from '../utils/evaluate';
import {
	ACTIONS_TYPES,
	ACTIONS,
	InitialState,
	defaultState,
} from './types/types';

export const logicReducer = (
	state: InitialState,
	action: ACTIONS
): InitialState => {
	const { type, payload } = action;
	switch (type) {
		case ACTIONS_TYPES.ADD_VALUE:
			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				};
			}

			if (payload.digit === '0' && state.currentOperand === '0') return state;

			if (payload.digit === '.' && state.currentOperand?.includes('.'))
				return state;
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.digit}`,
			};
		case ACTIONS_TYPES.CHOOSE_OPERATION:
			if (state.currentOperand == null && state.previousOperand == null) {
				return state;
			}

			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload.operation,
				};
			}

			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}

			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null,
			};

		case ACTIONS_TYPES.EVALUATE:
			if (
				state.operation == null ||
				state.currentOperand == null ||
				state.previousOperand == null
			)
				return state;

			return {
				...state,
				currentOperand:evaluate(state),
				operation: null,
				previousOperand: null,
				overwrite: true,
			};

		case ACTIONS_TYPES.DELETE_VALUE:
			if (state.overwrite)
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};

			if (state.currentOperand == null) return state;

			if (state.currentOperand.length === 1) {
				return {
					...state,
					currentOperand: null,
				};
			}

			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			};

		case ACTIONS_TYPES.CLEAR:
			return {};
	}
};
