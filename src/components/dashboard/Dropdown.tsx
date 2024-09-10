import Link from "next/link";
import { ReactNode, useState } from "react";
import styles from "@/styles/DashboardNav.module.css";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const Dropdown = ({
  children,
  //   categories,
  top = null,
  content,
}: {
  children: ReactNode;
  top: string | null;
  content: Record<string, string>;
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

// import Link from "next/link";
// import { ReactNode, useState } from "react";
// import styles from "@/styles/DashboardNav.module.css";
// import { FaAngleRight, FaAngleDown } from "react-icons/fa";

// const Dropdown = ({
//   children,
//   //   categories,
//   top = null,
//   content,
// }: {
//   children: ReactNode;
//   top: string | null;
//   content: Record<string, string>;
// }) => {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <div
//         className="flex justify-between items-baseline gap-3 py-1 rounded-lg px-3 text-muted-foreground transition-all hover:text-primary"
//         onClick={() => setDropdown(!dropdown)}
//       >
//         <div className={styles.flex}>
//           {children}
//           {top && <p>{top}</p>}
//         </div>
//         <div>{dropdown ? <FaAngleDown /> : <FaAngleRight />}</div>
//       </div>
//       <div className={dropdown ? "ml-10" : "hidden"}>
//         {Object.keys(content)?.map((key, index) => (
//           <Link
//             href={content[key]}
//             key={index}
//             className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all hover:text-primary"
//           >
//             <p>{key}</p>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Dropdown;
