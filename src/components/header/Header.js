import Link from "next/link";
import { LogoExample as Logo } from "@/assets/exports";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  //code
  return (
    <header className={styles.headerWrap}>
      <Link className={styles.logoWrap} href="/">
        <Image src={Logo} alt="company logo" priority />
      </Link>
      <nav>
        <ul className={styles.navWrap}>
          <li>
            <Link href="/" className={styles.navLink}>
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.navLink}>
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.navLink}>
              Link
            </Link>
          </li>
          <li>
            <Link href="/" className={`accentBtnHover ${styles.navBtn}`}>
              Link
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
