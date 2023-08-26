'use client';

import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../AuthContext';
import AdminDashboardNav from './AdminDashboardNav';
import styles from '@/styles/Dashboard.module.css';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner';
import { API_URL } from '@/helpers/vars';

const AdminLayout = ({ children }: any) => {
  const { getAllUsers }: any = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.matchMedia('(min-width: 1050px)').matches);
    getAllUsers();
  }, []);

  // useEffect(() => {
  //   if (!authChecking && !!user?.isAdmin) {
  //     setLoading(false);
  //     getAllUsers();
  //   } else if (!authChecking && !user?.isAdmin) {
  //     router.push('/login');
  //   }
  // }, [user, authChecking]);

  return (
    <section className={styles.dashboardLayout}>
      <span onClick={() => setOpen(!open)} className={styles.toggle}>
        {open ? '<' : '>'}
      </span>
      <div className={styles.layout}>
        <span className={open ? styles.nav : styles.navClose}>
          <AdminDashboardNav />
        </span>
        {children}
      </div>
    </section>
  );
};

export default AdminLayout;
