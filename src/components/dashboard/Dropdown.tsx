import Link from "next/link";
import { Children, useState } from "react";
import styles from "@/styles/DashboardNav.module.css";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const Dropdown = ({ children, top, content }: any) => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<div
				className={styles.flexSB}
				onClick={() => setDropdown(!dropdown)}
			>
				<div className={styles.flex}>
					{children}
					<p>{top}</p>
				</div>
				<div>{dropdown ? <FaAngleDown /> : <FaAngleRight />}</div>
			</div>
			<div
				className={
					dropdown ? styles.dropdownContent : styles.displayNone
				}
			>
				{Object.keys(content).map((item, i) => (
					<Link href={"/dashboard"} className="m_0" key={i}>
						<div>
							<Link href={content[item]}>{item}</Link>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Dropdown;
