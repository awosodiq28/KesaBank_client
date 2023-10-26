'use client';

import AuthContext from '@/components/AuthContext';
import { useContext } from 'react';

export default function AllUsers() {
  const { users }: any = useContext(AuthContext);

  return (
    <tbody>
      {users ? (
        users.map((user: any, i: any) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{+user.account_no + 1002784563}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.created_at.substring(0, 10)}</td>
            <td>{user.verified ? 'Verified' : 'Unverified'}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7} className='tac'>
            Loading...
          </td>
        </tr>
      )}
    </tbody>
  );
}
