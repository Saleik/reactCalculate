import React from 'react';
import Button from '../Button';
import styles from './index.module.css';

const Operators = () => {
	return (
		<div className={styles.container}>
			<div>
				<Button value='/'>&#247;</Button>
			</div>
			<div>
				<Button value='*'>&#215;</Button>
			</div>
			<div>
				<Button value='-'>&#8722;</Button>
			</div>
			<div>
				<Button value='+'>&#43;</Button>
			</div>
			<div>
				<Button value='total'>&#61;</Button>
			</div>
		</div>
	);
};

export default Operators;
