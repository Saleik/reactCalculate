import React from 'react';
import styles from './index.module.css';

type Props = {
	children: React.ReactNode;
};

const Result = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>;
};

export default Result;
