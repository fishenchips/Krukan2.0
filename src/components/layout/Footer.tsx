import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={"/krukan-banner.png"} alt="Krukan" />
      </div>
    </footer>
  );
};
