'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import styles from '@/styles/Dashboard.module.css';
import AuthContext from '../AuthContext';
import Transactions from './Transactions';

const Details = () => {
  const { user }: any = useContext(AuthContext);
  // const { account_no, account_bal } = user;
  console.log(user);

  return (
    <>
      <div className={styles.details}>
        <div className={styles.conp}>
          {!user?.verified && user?.verifying == false && (
            <p className={styles.warning}>
              Your account is not verified. Please submit all necessary
              documents.{' '}
              <Link href={'/dashboard/verify-page'}>Submit Documents</Link>
            </p>
          )}
        </div>
        <div className={styles.con}>
          <p>Account Number</p>
          <p>{user?.account_no}</p>
        </div>
        <div className={styles.con}>
          <p>Account Balance</p>
          <p>
            {user?.currency}
            {user?.account_bal?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </p>
        </div>
        <div className={styles.resFlex}>
          <div>
            <div className={styles.flex}>
              <p>Active Loans</p>{' '}
              <Link href={''}>
                <p style={{ whiteSpace: 'nowrap' }}>&#8594; View</p>
              </Link>
            </div>
            <p>$0</p>
          </div>
          <div>
            <div className={styles.flex}>
              <p>Payment Requests</p>{' '}
              <Link href={''}>
                <p style={{ whiteSpace: 'nowrap' }}>&#8594; View</p>
              </Link>
            </div>
            <p>$0</p>
          </div>
          <div>
            <div className={styles.flex}>
              <p>Active Fixed Deposits</p>{' '}
              <Link href={''}>
                <p style={{ whiteSpace: 'nowrap' }}>&#8594; View</p>
              </Link>
            </div>
            <p>$0</p>
          </div>
          <div>
            <div className={styles.flex}>
              <p>Active Tickets</p>{' '}
              <Link href={''}>
                <p style={{ whiteSpace: 'nowrap' }}>&#8594; View</p>
              </Link>
            </div>
            <p>$0</p>
          </div>
        </div>
        <div className={`${styles['con']} ${styles['over']}`}>
          <p>Up Comming Loan Payment</p>
          <table>
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Next Payment Date</th>
                <th>Status</th>
                <th>Amount to Pay</th>
                <th>Action</th>
              </tr>
              <tr>
                <td colSpan={5}>No Active Loan Available</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className={`${styles['con']} ${styles['over']}`}>
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Details;
