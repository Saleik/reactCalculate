import { InitialState } from './../Reducers/types/types';
export const evaluate = (state: InitialState): string => {
	const { previousOperand, currentOperand, operation } = state;
	const prev = parseFloat(previousOperand!);
	const curr = parseFloat(currentOperand!);

	if (isNaN(prev) || isNaN(curr)) return '';
	let computation = '';

	switch (operation) {
		case '+':
			computation = `${prev + curr}`;
			break;
		case '÷':
			computation = `${prev / curr}`;
			break;
		case '-':
			computation = `${prev - curr}`;
			break;
		case '*':
			computation = `${prev * curr}`;
			break;
	}

	return computation;
};
