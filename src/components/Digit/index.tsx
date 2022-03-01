import React from 'react';
import styles from './index.module.css';
import Button from '../Button';

const Digit = () => {
	return (
		<div className={styles.container}>
			<div>
				<Button>AC</Button>
			</div>
			<div>
				<Button>&#43;&#8725;&#8722;</Button>
			</div>
			<div>
				<Button>&#37;</Button>
			</div>
			<div>
				<Button>9</Button>
			</div>
			<div>
				<Button>8</Button>
			</div>
			<div>
				<Button>7</Button>
			</div>
			<div>
				<Button>6</Button>
			</div>
			<div>
				<Button>5</Button>
			</div>
			<div>
				<Button>4</Button>
			</div>
			<div>
				<Button>3</Button>
			</div>
			<div>
				<Button>2</Button>
			</div>
			<div>
				<Button>1</Button>
			</div>
			<div className={styles.zero}>
				<Button>0</Button>
			</div>
			<div>
				<Button>.</Button>
			</div>
		</div>
	);
};

export default Digit;
