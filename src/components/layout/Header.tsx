import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headingDiv}>
        <h2>FC Krukan - Lirarnas Lag</h2>
      </div>
    </header>
  );
};
