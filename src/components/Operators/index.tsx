import React from 'react';
import Button from '../Button';
import styles from './index.module.css';

const Operators = () => {
	return (
		<div className={styles.container}>
			<div>
				<Button>&#247;</Button>
			</div>
			<div>
				<Button>&#215;</Button>
			</div>
			<div>
				<Button>&#8722;</Button>
			</div>
			<div>
				<Button>&#43;</Button>
			</div>
			<div>
				<Button>&#61;</Button>
			</div>
		</div>
	);
};

export default Operators;
