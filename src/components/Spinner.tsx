import React from 'react';
import { ImSpinner6 } from 'react-icons/im';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from '@/styles/Spinner.module.css';

const Spinner = () => {
	return (
		<div className={styles.spinnerContainer}>
			{/* <ImSpinner6 /> */}
			<AiOutlineLoading3Quarters />
			<p className='tac'>Loading...</p>
		</div>
	);
};

export default Spinner;
