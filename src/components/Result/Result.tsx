import React from 'react';
import styles from './result.module.css';
import { Props } from './types/types';

export const Result = ({ children }: Props) => {
	return <div className={styles.container}>{children}</div>;
};
