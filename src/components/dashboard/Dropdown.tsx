import Link from 'next/link';
import { ReactNode, useState } from 'react';
import styles from '@/styles/DashboardNav.module.css';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

const Dropdown = ({
  children,
  //   categories,
  top = null,
  content
}: {
  children: ReactNode;
  top: string | null;
  content: {};
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className={styles.flexSB} onClick={() => setDropdown(!dropdown)}>
        <div className={styles.flex}>
          {children}
          {top && <p>{top}</p>}
        </div>
        <div>{dropdown ? <FaAngleDown /> : <FaAngleRight />}</div>
      </div>
      <div className={dropdown ? styles.dropdownContent : styles.displayNone}>
        {/* {categories?.map((item: string, i: number) => (
          <div key={i}>
            <Link href={item}>{item}</Link>
          </div>
        ))} */}
        {Object.keys(content)?.map((key, index) => (
          <div key={index}>
            <Link href={content[key]}>
              <p>{key}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
