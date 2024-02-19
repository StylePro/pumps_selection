import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_nav}>
        <Link className={styles.header_item} to="pump_selection">
          Подбор насоса
        </Link>
        <Link className={styles.header_item} to="guide">
          Справочник
        </Link>
      </div>
      <div className={styles.header_logo}>Logo</div>
    </div>
  );
};

export default Header;
