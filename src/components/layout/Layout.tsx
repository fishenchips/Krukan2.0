import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./Layout.module.css";

export const Layout = (props: any) => {
  return (
    <div className={styles.project}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};
