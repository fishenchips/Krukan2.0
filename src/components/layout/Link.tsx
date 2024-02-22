import Link from "next/link";
import styles from "./Link.module.css";

interface Props {
  url: string;
  text: string;
}

export const LinkComponent: React.FC<Props> = ({ url, text }) => {
  return (
    <Link href={url} target="blank" className={styles.link}>
      {text}
    </Link>
  );
};
