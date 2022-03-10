export const evaluate = ({
	previousOperand,
	currentOperand,
	operation,
}: {
	previousOperand: string;
	currentOperand: string;
	operation: string;
}): string => {
	const prev = parseFloat(previousOperand);
	const curr = parseFloat(currentOperand);

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
