'use client';

import AllUsers from '@/components/admin/Users/AllUsers';
import styles from '@/styles/Dashboard.module.css';
const Users = () => {
  return (
    <div className={styles.details}>
      <div className={`${styles['con']} ${styles['over']}`}>
        <p>All Users</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>AC Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered Date</th>
              <th>Status</th>
            </tr>
          </thead>
          {/* {users ? (
            <tbody>
              {users.map((user: any, i: any) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{+user.account_no}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.created_at.substring(0, 10)}</td>
                  <td>{user.verified ? 'Verified' : 'Unverified'}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            ''
          )} */}
          <AllUsers />
        </table>
      </div>
    </div>
  );
};

export default Users;
