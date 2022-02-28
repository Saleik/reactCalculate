import React from 'react';
import Digit from '../Digit';
import Formula from '../Formula';
import Result from '../Result';
import styles from './index.module.css';
const Calculate = () => {
	return (
		<div className={styles.container}>
			<Formula />
			<Result />
			<Digit />
		</div>
	);
};

export default Calculate;
