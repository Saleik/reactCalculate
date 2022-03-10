const INTEGER_FORMAT = new Intl.NumberFormat('Fr', {
	maximumFractionDigits: 0,
});

export const formatOperand = (operand: string) => {
	if (operand == null) return;
	const [integer, decimal] = operand.split('.');

	if (decimal == null) return INTEGER_FORMAT.format(parseInt(integer));

	return `${INTEGER_FORMAT.format(parseInt(integer))}.${decimal}`;
};
