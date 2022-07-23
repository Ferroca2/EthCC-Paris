import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
      <div className={styles.all}>
        <div className={styles.navbar}>
          <h1 className={styles.title}>
            <Link className={styles.navbarLink} to="/">
                <img src="logo.svg" width={140} height={70} quality={100} alt="" priority={true}/>
            </Link>
          </h1>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link className={styles.navbarLink} to="/create-allocation">
                    Create
                </Link>
              </li>
              <li>
                <Link className={styles.navbarLink} to="/view">
                  View
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
