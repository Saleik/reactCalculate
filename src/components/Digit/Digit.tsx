import React from 'react';
import styles from './digit.module.css';
import { Button } from '../Button/Button';

export const Digit = () => {
	return (
		<div className={styles.container}>
			<div className={styles.extends}>
				<Button value='reset'>AC</Button>
			</div>

			<div>
				<Button value='percent'>&#37;</Button>
			</div>
			<div>
				<Button value={9}>9</Button>
			</div>
			<div>
				<Button value={8}>8</Button>
			</div>
			<div>
				<Button value={7}>7</Button>
			</div>
			<div>
				<Button value={6}>6</Button>
			</div>
			<div>
				<Button value={5}>5</Button>
			</div>
			<div>
				<Button value={4}>4</Button>
			</div>
			<div>
				<Button value={3}>3</Button>
			</div>
			<div>
				<Button value={2}>2</Button>
			</div>
			<div>
				<Button value={1}>1</Button>
			</div>
			<div className={styles.extends}>
				<Button value={0}>0</Button>
			</div>
			<div>
				<Button value='.'>.</Button>
			</div>
		</div>
	);
};
