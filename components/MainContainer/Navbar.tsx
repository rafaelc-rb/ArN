import Link from "next/link";
import styles from "../../styles/MainContainer/Navbar.module.css";

import {
  IoMailOutline,
  IoCalendarClearOutline,
  IoPersonOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <ul className={styles.navbar}>
        <ul className={styles.leading}>
          <li>
            <Link href={"/"}>LOGO</Link>
          </li>
        </ul>
        <ul className={styles.actions}>
          <li>
            <Link href={"/"}>
              <IoMailOutline />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <IoCalendarClearOutline />
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <IoPersonOutline />
            </Link>
          </li>
        </ul>
      </ul>
    </>
  );
};
export default Navbar;
