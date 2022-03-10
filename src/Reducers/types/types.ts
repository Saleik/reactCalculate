export enum ACTIONS_TYPES {
	ADD_VALUE = 'add-value',
	CHOOSE_OPERATION = 'choose-operation',
	CLEAR = 'clear',
	DELETE_VALUE = 'delete-value',
	EVALUATE = 'evaluate',
}

export interface ACTIONS {
	type: ACTIONS_TYPES;
	payload: {
		digit?: string;
		operation?: string;
	};
}

export interface InitialState {
	currentOperand: string;
	previousOperand: string;
	operation: string;
	overwrite: boolean;
}
