// src/components/AppBar/AppBar.js
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
